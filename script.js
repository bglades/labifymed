// Sample test data
const testResults = [
    { 
      name: 'Blood Pressure- June 5, 2023 14:23',
      value: '120/80',
      normal: '90/60 - 120/80',
      abnormal: true,
      high: false,
      critical: false,
      new: true
    },
    { 
      name: 'Cholesterol- June 5, 2023 13:15',
      value: '250',
      normal: '<200',
      abnormal: false,
      high: true,
      critical: false,
      new: true
    },
    { 
      name: 'Glucose- June 5, 2023 13:15',
      value: '110',
      normal: '70 - 100',
      abnormal: true,
      high: true,
      critical: true,
      new: false
    },
    { 
      name: 'Hemoglobin - June 5, 2023 13:15',
      value: '14',
      normal: '12 - 16',
      abnormal: false,
      high: false,
      critical: false,
      new: false
    },
  ];
  
  // Populate the test list
  const testItemsContainer = document.getElementById('testItems');
  testResults.forEach((result, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'test-item';
    if (result.new) {
      const newIcon = document.createElement('span');
      newIcon.className = 'new-icon';
      newIcon.textContent = 'New';
      listItem.appendChild(newIcon);
    }
    listItem.innerHTML += result.name;
    listItem.addEventListener('click', () => showResultDetails(index));
    testItemsContainer.appendChild(listItem);
  });
  
  // Function to display the result details
  function showResultDetails(index) {
    const resultDetailsContainer = document.getElementById('resultDetails');
    resultDetailsContainer.innerHTML = '';
  
    const result = testResults[index];
    const resultElement = document.createElement('div');
    resultElement.className = 'result';
  
    const testName = document.createElement('span');
    testName.className = 'test-name';
    testName.textContent = result.name;
    resultElement.appendChild(testName);
  
    if (result.abnormal) {
      const abnormalIcon = document.createElement('span');
      abnormalIcon.className = 'abnormal-icon';
      abnormalIcon.textContent = 'Abnormal';
      resultElement.appendChild(abnormalIcon);
    }
  
    if (result.high) {
      const highArrow = document.createElement('span');
      highArrow.className = 'high-arrow';
      highArrow.textContent = 'high';
      resultElement.appendChild(highArrow);
    }
  
    if (!result.high) {
      const lowArrow = document.createElement('span');
      lowArrow.className = 'low-arrow';
      lowArrow.textContent = 'low';
      resultElement.appendChild(lowArrow);
    }
  
    const resultValue = document.createElement('span');
    resultValue.textContent = result.value;
    resultElement.appendChild(resultValue);
  
    const normalRange = document.createElement('span');
    normalRange.className = 'normal-range';
    normalRange.textContent = `(Normal Range: ${result.normal})`;
    resultElement.appendChild(normalRange);
  
    resultDetailsContainer.appendChild(resultElement);
  
    // Remove the "new" icon after viewing the result
    if (result.new) {
      result.new = false;
      const testItems = document.getElementsByClassName('test-item');
      testItems[index].removeChild(testItems[index].querySelector('.new-icon'));
    }
  }
  