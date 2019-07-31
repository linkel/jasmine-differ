const resultTable = document.querySelector("#result");
const textInput = document.querySelector("#text-input");

const formatText = () => {
    resultTable.innerHTML = '';

    let myString = String(textInput.value);

    let expectedResult_startIndex = myString.search("to have been called") + 25;
    let expectedResult_endIndex = myString.search("but actual calls were");

    let actualResult_startIndex = expectedResult_endIndex + 22;
    let actualResult_endIndex = myString.length - 1;

    let expectedResult = myString
                        .substring(expectedResult_startIndex, expectedResult_endIndex)
                        .split(/,/g)

    let actualResult = myString
                        .substring(actualResult_startIndex, actualResult_endIndex)
                        .split(/,/g)
                        
    for (i = 0; i < expectedResult.length; i++) {
        let row = document.createElement("tr")
        let elineNum = document.createElement("td");
        let elineData = document.createElement("td");
        elineNum.className = "diff-line-number";
        elineData.className = "diff-line";
        elineNum.innerHTML = i+1;
        elineData.innerHTML = expectedResult[i];

        let alineNum = document.createElement("td");
        let alineData = document.createElement("td");
        alineNum.className = "diff-line-number";
        alineData.className = "diff-line";
        alineNum.innerHTML = i+1;
        alineData.innerHTML = actualResult[i];

        row.appendChild(elineNum);
        row.appendChild(elineData);
        row.appendChild(alineNum);
        row.appendChild(alineData);
        resultTable.appendChild(row);
    }
}

textInput.innerHTML = "Expected spy EventServiceMock.getEventsObservable to have been called with [ Object({ eventGroupIds: [ 'ROOT' ], selfEventGroupIds: [ 'ROOT' ], startDate: Object({ year: 2019, month: 6, day: 17 }), endDate: Object({ year: 2019, month: 6, day: 24 }), manualOnly: false, trainableOnly: false, boutsOnly: false, pageNumber: 1, pageSize: 10, triggerIds: [  ], statusIds: [  ], behaviorIds: [  ], fighterIds: [  ], equipmentIds: [  ], includeAllFighterAndTrainerEvents: true, sortField: 'RecordDateLocal', sortDirection: 'desc' }) ] but actual calls were [ Object({ eventGroupIds: [ 'ROOT' ], selfEventGroupIds: [ 'ROOT' ], startDate: Object({ year: 2019, month: 6, day: 17 }), endDate: Object({ year: 2019, month: 6, day: 24 }), manualOnly: false, trainableOnly: false, boutsOnly: false, pageNumber: 1, pageSize: 10, triggerIds: [  ], statusIds: [  ], behaviorIds: [  ], fighterIds: [  ], equipmentIds: [  ], cameraIds: [  ], includeAllFighterAndTrainerEvents: true, sortField: 'RecordDateLocal', sortDirection: 'desc' }) ]."
formatText();