const expectedResult = document.querySelector("#expected-result");
const actualResult = document.querySelector("#actual-result");
const textInput = document.querySelector("#text-input");

const formatText = () => {
    let myString = String(textInput.value);

    let expectedResult_startIndex = myString.search("to have been called") + 25;
    let expectedResult_endIndex = myString.search("but actual calls were");

    let actualResult_startIndex = expectedResult_endIndex + 22;
    let actualResult_endIndex = myString.length - 1;

    expectedResult.innerHTML = myString
                                .substring(expectedResult_startIndex, expectedResult_endIndex)
                                .split(',')
                                .join(',\n');

    actualResult.innerHTML = myString
                                .substring(actualResult_startIndex, actualResult_endIndex)
                                .split(',')
                                .join(',\n');
}

const expectedDiff = () => {

}

const actualDiff = () => {
    
}