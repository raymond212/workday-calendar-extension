import { extractSection } from './utils';
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from './App/App';
// Define the type of App as a React component

// Function to add a button to a given HTML element
function addButtonToElement(element: Element): void {
  // Creating a button element
  const button: HTMLButtonElement = document.createElement('button');
  // Setting the button text content to '+'
  button.textContent = '+';
  // Add custom button id
  button.id = 'add-section-button';
  // Adding an event listener for when the button is clicked
  button.addEventListener('click', () => {
    handleButtonClick(element);
  });

  // Styling the button
  button.style.padding = '10px 20px';
  button.style.fontSize = '16px';
  button.style.color = '#333';
  button.style.backgroundColor = '#EEF1F2';
  button.style.boxShadow = '0 0 0 1px #CED3D9';
  button.style.cursor = 'pointer';
  button.style.marginRight = '10px';
  if (element.previousElementSibling && 
      element.previousElementSibling.getAttribute('data-automation-id') === 'checkbox') {
    button.style.marginLeft = '24px';
  }
  button.style.borderRadius = '5px';
  button.style.transition = 'all 120ms ease-in';
  button.style.border = 'none';
  button.style.outline = 'none';
  button.style.textAlign = 'center'; // Center the text horizontally

  // Adding display flex and align-items center to the button's parent
  const parentElement = element.parentElement;
  if (parentElement) {
    parentElement.style.display = 'flex';
    parentElement.style.alignItems = 'center';
  }

  // Adding event listeners for mouse enter and leave to change button style
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#CED3D9';
    button.style.boxShadow = '0 0 0 1px #9DA9AF';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#EEF1F2';
    button.style.boxShadow = '0 0 0 1px #CED3D9';
  });

  // Inserting the button before the given element
  element.parentNode?.insertBefore(button, element);
}

// Function to handle button click event
async function handleButtonClick(element: Element): Promise<void> {
  const selectedSection = await extractSection(element);
  if (!selectedSection) return;
  // Getting existing sections from Chrome storage and adding the new section
  chrome.storage.sync.set({ newSection: selectedSection });

  // Ensure the drawer opens when a button is clicked
  toggleContainer(true);
}

// Function to observe DOM changes and add buttons to matching elements
function observeDOMAndAddButtons(): void {
  // Configuration for the mutation observer
  const config: MutationObserverInit = {
    childList: true,
    subtree: true,
    attributes: false,
  };

  // Callback function for the mutation observer
  const callback: MutationCallback = (mutationsList, observer) => {
    mutationsList.forEach((mutation) => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            // Finding matching elements within the added node
            const matchingElements = node.querySelectorAll(
              '[data-automation-id="compositeContainer"] > div'
            ); // last time buttons gone, this selector broke
            // Adding buttons to matching elements
            matchingElements.forEach((matchingElement) => {
              // Check if the element already has a button as a previous sibling
              const previousSibling = matchingElement.previousElementSibling;
              const isButtonAlreadyPresent =
                previousSibling && previousSibling.id === 'add-section-button';
              const isCourseInfo = matchingElement.getAttribute('class') === 'WMUF WKUF';

              if (!isButtonAlreadyPresent && isCourseInfo) {
                addButtonToElement(matchingElement);
              }
            });
          }
        });
      }
    });
  };

  // Creating a new mutation observer instance
  const observer: MutationObserver = new MutationObserver(callback);
  // Observing changes to the document body with the specified configuration
  observer.observe(document.body, config);
}

// Function to set up the observer for DOM changes
function setupObserver(): void {
  // If the document is still loading, add an event listener to observe DOM changes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeDOMAndAddButtons);
  } else {
    // Directly observe DOM changes
    observeDOMAndAddButtons();
  }
}

function toggleContainer(forceOpen = false) {
  const reactContainer = document.querySelector('#react-container');
  if (!reactContainer) return;
  const containerWrapper = reactContainer.parentElement;
  const icon = document.getElementById('toggle-icon');
  if (containerWrapper && icon) {
    const isOpen = containerWrapper.style.right === '0px';

    if (isOpen && forceOpen) {
      return
    }

    if (forceOpen || !isOpen) {
      containerWrapper.style.right = '0px';
      icon.textContent = '▶'; // Show left arrow when container is open
    } else {
      containerWrapper.style.right = '-305px';
      icon.textContent = '◀'; // Show right arrow when container is closed
    }
    // Save the new state to local storage
    chrome.storage.local.set({ drawerOpen: !isOpen }, () => {
      console.log('Drawer state saved:', !isOpen);
    });
  }
}

// Listen for messages from background script
// to know when user clicks extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.toggleContainer) {
    const reactContainer = document.querySelector('#react-container');
    if (!reactContainer) return;
    const containerWrapper = reactContainer.parentElement;
    if (containerWrapper) {
      const isOpen = containerWrapper.style.right === '0px';
      toggleContainer(!isOpen);

      // Save the new state to local storage
      chrome.storage.local.set({ drawerOpen: !isOpen }, () => {
        console.log('Drawer state saved:', !isOpen);
      });
    }
  }
});

setupObserver();

// document.addEventListener('DOMContentLoaded', function () {
// Read the initial state from storage and adjust UI accordingly
chrome.storage.local.get('drawerOpen', function (data) {
  // if (!data.drawerOpen) {
  //   toggleContainer(false);
  // }
  const containerWrapper = document.createElement('div');
  containerWrapper.style.position = 'fixed';
  containerWrapper.style.top = '50%'; // Center vertically
  containerWrapper.style.transform = 'translateY(-50%)';
  containerWrapper.style.right = data.drawerOpen ? '0px' : '-305px'; // Start onscreen or offscreen depending on storage (except for the icon tab)
  containerWrapper.style.zIndex = '1000';
  containerWrapper.style.transition = 'right 0.3s';

  const icon = document.createElement('div');
  icon.id = 'toggle-icon';
  icon.textContent = data.drawerOpen ? '▶' : '◀'; // Initially showing the right arrow
  icon.style.position = 'absolute';
  icon.style.top = '50%'; // Vertically center on the tab
  icon.style.transform = 'translateY(-50%)';
  icon.style.transform = 'translateX(-100%)';

  icon.style.width = '30px';
  icon.style.height = '30px';
  icon.style.backgroundColor = '#FFF';
  icon.style.color = '#333';
  icon.style.textAlign = 'center';
  icon.style.lineHeight = '30px';
  icon.style.borderRadius = '5px 0px 0px 5px';
  icon.style.border = '1px solid #CCC';
  icon.style.cursor = 'pointer';
  icon.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

  const container = document.createElement('div');
  container.id = 'react-container';
  container.style.width = '300px';
  container.style.height = '650px';
  container.style.border = '1px solid #CCC';
  container.style.backgroundColor = '#FFF';
  container.style.overflow = 'auto';
  container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
  container.style.borderRadius = '8px';

  containerWrapper.appendChild(icon);
  containerWrapper.appendChild(container);
  document.body.appendChild(containerWrapper);

  icon.addEventListener('click', () => toggleContainer());

  ReactDOM.render(<App />, container);
});
// });

let hasAlreadyAutofilledCourseSections: boolean = false;
let hasAlreadyAutofilledSavedSchedules: boolean = false;

function autofillCourseSections () {
  const dropDowns = document.querySelectorAll('[data-automation-id="multiselectInputContainer"]');
  console.log('Autofilling course sections...');
  (dropDowns[0] as HTMLElement).click(); // open start date dropdown
  waitAndClick('[data-automation-label="Future Periods"]'); // select future periods
  waitAndClick('[data-automation-label="2024-25 UBC-V Academic Year"]'); // select UBC V
  waitAndClick('[data-automation-label="2024-25 Winter Term 1 (UBC-V) (2024-09-03-2024-12-06)"]'); // select Winter Term 1
  waitAndClick('[data-automation-label="2024-25 Winter Term 2 (UBC-V) (2025-01-06-2025-04-08)"]'); // select Winter Term 2
  (dropDowns[1] as HTMLElement).click(); // open level dropdown
  waitAndClick('[data-automation-label="Undergraduate"]'); // select Undergraduate
  console.log("Autofill course sections completed");
}

function autofillSavedSchedules () {
  console.log('Autofilling saved schedules...');
  waitAndClick('[data-automation-id="multiselectInputContainer"]'); // open start date dropdown
  waitAndClick('[data-automation-label="All"]'); // select all
  if (localStorage.getItem('autofillSavedScheduleTerm') === '2') {
    waitAndClick('[data-automation-label="2024-25 Winter Term 2 (UBC-V)(2025-01-06-2025-04-08)"]'); // select Winter Term 2
  } else {
    waitAndClick('[data-automation-label="2024-25 Winter Term 1 (UBC-V)(2024-09-03-2024-12-06)"]'); // select Winter Term 1
  }
  console.log('Autofill saved schedules completed')
}

function waitForElm(selector: string) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function waitAndClick(selector: string): void {
  waitForElm(selector).then((element) => {
    (element as HTMLElement).click();
  });
}

const autofillCourseSectionsChecker = () => {
  if (localStorage.getItem('autofillEnabled') === 'true') {
    const checkAndAutofill = () => {
      const okButton = document.querySelector('[data-automation-id="wd-CommandButton_uic_okButton"]');
      if (!hasAlreadyAutofilledCourseSections && document.title === "Find Course Sections - Workday" && okButton) {
        autofillCourseSections();
        hasAlreadyAutofilledCourseSections = true;
        clearInterval(intervalId); // Stop checking
      }
    };
    const intervalId = setInterval(checkAndAutofill, 1000);
  } else {
    console.log("Autofill disabled");
  }
};

const autofillSavedSchedulesChecker = () => {
  if (localStorage.getItem('autofillEnabled') === 'true') {
    const checkAndAutofill = () => {
      const okButton = document.querySelector('[data-automation-id="wd-CommandButton_uic_okButton"]');
      if (!hasAlreadyAutofilledSavedSchedules && document.title === 'View My Saved Schedules - Workday' && okButton) {
        autofillSavedSchedules();
        hasAlreadyAutofilledSavedSchedules = true;
        clearInterval(intervalId); // Stop checking
      }
    };
    const intervalId = setInterval(checkAndAutofill, 1000);
  } else {
    console.log("Autofill disabled");
  }
};

autofillCourseSectionsChecker();
autofillSavedSchedulesChecker();
