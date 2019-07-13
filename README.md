## To Do

- [x] Rudimentary CSS
- [x] Rip out the relevant parts of the expected and actuals from the full string
- [ ] Brainstorm how to do a diff
- [ ] I might have to use a text input box for the outputs because right now I'm using <br> for line breaks

## First steps

I would like to write a webpage that has an input that can take text pasted into it, and then formats the text. The text is going to be the Jasmine failed test when something is expected to have been called with something but instead was called with another thing. Maybe without a buttonpress. The text is then formatted into two groups, the part that's after "to have been called with" and before "but actual calls were", and then the part after that to the end, excluding the period.

It'll show the expected on the left and the actual on the right.

Once I have something that can do that, then I can think about diffing it. After I get something that works to diff it, I would like to look into diffing algorithms a little closer and have gleaned a better understanding of how it works.

## Example

For example, I would like to turn the following:


Expected spy EventServiceMock.getEventsObservable to have been called with [ Object({ eventGroupIds: [ 'ROOT' ], selfEventGroupIds: [ 'ROOT' ], startDate: Object({ year: 2019, month: 6, day: 17 }), endDate: Object({ year: 2019, month: 6, day: 24 }), manualOnly: false, trainableOnly: false, boutsOnly: false, pageNumber: 1, pageSize: 10, triggerIds: [  ], statusIds: [  ], behaviorIds: [  ], fighterIds: [  ], equipmentIds: [  ], includeAllFighterAndTrainerEvents: true, sortField: 'RecordDateLocal', sortDirection: 'desc' }) ] but actual calls were [ Object({ eventGroupIds: [ 'ROOT' ], selfEventGroupIds: [ 'ROOT' ], startDate: Object({ year: 2019, month: 6, day: 17 }), endDate: Object({ year: 2019, month: 6, day: 24 }), manualOnly: false, trainableOnly: false, boutsOnly: false, pageNumber: 1, pageSize: 10, triggerIds: [  ], statusIds: [  ], behaviorIds: [  ], fighterIds: [  ], equipmentIds: [  ], cameraIds: [  ], includeAllFighterAndTrainerEvents: true, sortField: 'RecordDateLocal', sortDirection: 'desc' }) ].


into this:

Expected:

[ Object({ eventGroupIds: [ 'ROOT' ], 
selfEventGroupIds: [ 'ROOT' ], 
startDate: Object({ year: 2019, month: 6, day: 17 }), 
endDate: Object({ year: 2019, month: 6, day: 24 }), 
manualOnly: false, 
trainableOnly: false, 
boutsOnly: false, 
pageNumber: 1, 
pageSize: 10, 
triggerIds: [  ], 
statusIds: [  ], 
behaviorIds: [  ], 
fighterIds: [  ], 
equipmentIds: [  ], 
includeAllFighterAndTrainerEvents: true, 
sortField: 'RecordDateLocal', 
sortDirection: 'desc' }) ]

Actual:

[ Object({ eventGroupIds: [ 'ROOT' ], 
selfEventGroupIds: [ 'ROOT' ], 
startDate: Object({ year: 2019, month: 6, day: 17 }), 
endDate: Object({ year: 2019, month: 6, day: 24 }), 
manualOnly: false, 
trainableOnly: false, 
boutsOnly: false, 
pageNumber: 1, 
pageSize: 10, 
triggerIds: [  ], 
statusIds: [  ], 
behaviorIds: [  ], 
fighterIds: [  ], 
equipmentIds: [  ], 
cameraIds: [  ], 
includeAllFighterAndTrainerEvents: true, 
sortField: 'RecordDateLocal', 
sortDirection: 'desc' }) ]
