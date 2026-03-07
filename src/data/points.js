// data - временная папка
const points =
  [
    {
      'id': 'c407ba31-f25f-4339-b7b7-55a8e2a9a129',
      'basePrice': 6771,
      'dateFrom': '2026-04-19T18:10:05.413Z',
      'dateTo': '2026-04-21T18:53:05.413Z',
      'destination': '1542f4f5-2f9b-4767-94f3-21cb636cd7f5',
      'isFavorite': false,
      'offers': [
        '0483c37d-b4c9-4808-b091-12eecaf4c03e',
        '69ed5217-4426-4d9f-8453-269c7614e230'
      ],
      'type': 'flight'
    },
    {
      'id': '1d5f04cd-112e-451b-9742-3a9684be46d6',
      'basePrice': 3723,
      'dateFrom': '2026-04-23T18:52:05.413Z',
      'dateTo': '2026-04-25T19:51:05.413Z',
      'destination': 'cd61e4aa-0224-4786-a74d-9b864e905c8c',
      'isFavorite': true,
      'offers': [
        'c3e5bb44-0608-46fb-8f86-48a4664e2466',
        'af892bc3-c4a4-40bf-b184-f46eced52897'
      ],
      'type': 'check-in'
    },
    {
      'id': '225c66fa-f280-4f19-a9da-820b66852734',
      'basePrice': 5962,
      'dateFrom': '2026-04-26T20:03:05.413Z',
      'dateTo': '2026-04-27T09:29:05.413Z',
      'destination': 'bda52f8a-b6f7-4a9b-a4e6-ab72ff3e21c2',
      'isFavorite': false,
      'offers': [
        'a028a29b-ebe1-412d-9cb8-4658af88de62'
      ],
      'type': 'taxi'
    },
    {
      'id': '6cd83a6f-0c6f-41c5-9f49-a5fd88068280',
      'basePrice': 5712,
      'dateFrom': '2026-04-27T19:40:05.413Z',
      'dateTo': '2026-04-29T10:26:05.413Z',
      'destination': '879bb5cb-4f7f-488a-8818-2fcbfb6f705a',
      'isFavorite': true,
      'offers': [
        '90c6b69d-71e3-4fcc-a53f-97d430477742',
        '63a1c0e1-d88c-438f-97bf-4a90a36808d7'
      ],
      'type': 'restaurant'
    },
    {
      'id': '1682fc2a-0f0f-480b-8247-99f2e8e4d1fc',
      'basePrice': 4902,
      'dateFrom': '2026-04-30T02:00:05.413Z',
      'dateTo': '2026-05-01T14:34:05.413Z',
      'destination': 'c7e7fb9c-1ac5-4b3b-a5b1-b5d85a3e42e2',
      'isFavorite': false,
      'offers': [
        '365fb6a9-cdf2-48a9-abf2-9d12180218aa',
        'a422ebb8-45df-43d9-b0ce-63aa8a26c721',
        'fdb5d8ba-495c-48e5-850a-45d5e84b2232',
        'f7a679f1-05c7-4e1a-9694-0f12fbe1d6ed',
        '268b0c17-9c69-4a3c-81a8-80ade12ce940',
        '023b3a8e-dfb0-49ad-95d7-2fb68dd2117d'
      ],
      'type': 'ship'
    },
    {
      'id': '8799f664-87a8-49b2-a253-fa67770a6794',
      'basePrice': 9348,
      'dateFrom': '2026-05-02T14:58:05.413Z',
      'dateTo': '2026-05-03T16:46:05.413Z',
      'destination': 'bda52f8a-b6f7-4a9b-a4e6-ab72ff3e21c2',
      'isFavorite': false,
      'offers': [],
      'type': 'check-in'
    },
    {
      'id': 'a0b4269b-9282-451d-978d-70e7c9a3db2c',
      'basePrice': 6680,
      'dateFrom': '2026-05-05T15:16:05.413Z',
      'dateTo': '2026-05-06T14:45:05.413Z',
      'destination': '89fbaac0-8397-4440-ad40-537403195249',
      'isFavorite': true,
      'offers': [
        '6ab80708-27ae-4a6b-9597-1974b6be43e4',
        '90acdf9d-7263-4daf-b25f-130085b91b1d',
        'afe3e2fb-7529-458d-9162-7c5375736b3d'
      ],
      'type': 'train'
    },
    {
      'id': '9385b0ad-78cc-4c79-b838-602d122cd9f8',
      'basePrice': 8396,
      'dateFrom': '2026-05-07T08:18:05.413Z',
      'dateTo': '2026-05-09T03:44:05.413Z',
      'destination': '561938bd-f278-4fed-99bc-9c4384baa6d1',
      'isFavorite': true,
      'offers': [
        '365fb6a9-cdf2-48a9-abf2-9d12180218aa',
        'a422ebb8-45df-43d9-b0ce-63aa8a26c721',
        'fdb5d8ba-495c-48e5-850a-45d5e84b2232',
        'f7a679f1-05c7-4e1a-9694-0f12fbe1d6ed',
        '268b0c17-9c69-4a3c-81a8-80ade12ce940',
        '023b3a8e-dfb0-49ad-95d7-2fb68dd2117d'
      ],
      'type': 'ship'
    },
    {
      'id': 'f59bf826-d0f2-45f2-ba82-cfffae0578cb',
      'basePrice': 7349,
      'dateFrom': '2026-05-09T22:36:05.413Z',
      'dateTo': '2026-05-11T14:37:05.413Z',
      'destination': 'b5d8e963-a767-43e1-8e84-8aa33e3066cf',
      'isFavorite': false,
      'offers': [],
      'type': 'sightseeing'
    },
    {
      'id': '6eadb777-1e94-46c0-8a62-13f5ef65cc4e',
      'basePrice': 9289,
      'dateFrom': '2026-05-12T18:18:05.413Z',
      'dateTo': '2026-05-13T07:54:05.413Z',
      'destination': '879bb5cb-4f7f-488a-8818-2fcbfb6f705a',
      'isFavorite': true,
      'offers': [],
      'type': 'taxi'
    },
    {
      'id': '5832ef41-5866-4282-9c4e-a7f98037ba0f',
      'basePrice': 3367,
      'dateFrom': '2026-05-14T23:11:05.413Z',
      'dateTo': '2026-05-16T18:40:05.413Z',
      'destination': 'b5d8e963-a767-43e1-8e84-8aa33e3066cf',
      'isFavorite': false,
      'offers': [
        '50011807-3954-47e2-b6f7-1371d495e30d',
        'f9b0f1b6-0f19-4168-bc4f-c396bd0694ec'
      ],
      'type': 'drive'
    },
    {
      'id': '58ab5b99-6d74-4c03-a0e4-d5357fb025dd',
      'basePrice': 1665,
      'dateFrom': '2026-05-17T08:36:05.413Z',
      'dateTo': '2026-05-18T22:47:05.413Z',
      'destination': '1542f4f5-2f9b-4767-94f3-21cb636cd7f5',
      'isFavorite': false,
      'offers': [
        'fdb5d8ba-495c-48e5-850a-45d5e84b2232',
        'f7a679f1-05c7-4e1a-9694-0f12fbe1d6ed',
        '268b0c17-9c69-4a3c-81a8-80ade12ce940',
        '023b3a8e-dfb0-49ad-95d7-2fb68dd2117d'
      ],
      'type': 'ship'
    },
    {
      'id': '377e90f7-2fe6-4e59-944d-f8f6d3c3d569',
      'basePrice': 4850,
      'dateFrom': '2026-05-19T15:25:05.413Z',
      'dateTo': '2026-05-19T22:21:05.413Z',
      'destination': '1542f4f5-2f9b-4767-94f3-21cb636cd7f5',
      'isFavorite': true,
      'offers': [
        'a1877003-0462-4cd4-96d4-36ebcebbcf23',
        'a1f0b097-b6f8-4cfc-9224-ef3ef692dc88',
        'c31d1356-00e5-460d-bdb9-a65079788793',
        'c3e5bb44-0608-46fb-8f86-48a4664e2466',
        'af892bc3-c4a4-40bf-b184-f46eced52897'
      ],
      'type': 'check-in'
    },
    {
      'id': '6d6f995d-fef4-4ae2-946a-1c12cf57c85f',
      'basePrice': 6758,
      'dateFrom': '2026-05-20T08:00:05.413Z',
      'dateTo': '2026-05-21T18:32:05.413Z',
      'destination': '097636c6-2730-40b5-b153-bb61480eb778',
      'isFavorite': false,
      'offers': [
        'a422ebb8-45df-43d9-b0ce-63aa8a26c721',
        'fdb5d8ba-495c-48e5-850a-45d5e84b2232',
        'f7a679f1-05c7-4e1a-9694-0f12fbe1d6ed',
        '268b0c17-9c69-4a3c-81a8-80ade12ce940',
        '023b3a8e-dfb0-49ad-95d7-2fb68dd2117d'
      ],
      'type': 'ship'
    },
    {
      'id': 'a5c74c3a-85e3-4f06-a3a2-3c3299d0f2de',
      'basePrice': 7261,
      'dateFrom': '2026-05-22T03:01:05.413Z',
      'dateTo': '2026-05-22T15:48:05.413Z',
      'destination': '6848bc90-62e3-42b1-bcaa-759211e1b0b2',
      'isFavorite': true,
      'offers': [
        '90acdf9d-7263-4daf-b25f-130085b91b1d',
        'afe3e2fb-7529-458d-9162-7c5375736b3d'
      ],
      'type': 'train'
    },
    {
      'id': '4c4a0d20-f1d7-4d78-bfe9-c9449fd41699',
      'basePrice': 9145,
      'dateFrom': '2026-05-23T20:19:05.413Z',
      'dateTo': '2026-05-24T09:10:05.413Z',
      'destination': 'c7e7fb9c-1ac5-4b3b-a5b1-b5d85a3e42e2',
      'isFavorite': true,
      'offers': [
        '365fb6a9-cdf2-48a9-abf2-9d12180218aa',
        'a422ebb8-45df-43d9-b0ce-63aa8a26c721',
        'fdb5d8ba-495c-48e5-850a-45d5e84b2232',
        'f7a679f1-05c7-4e1a-9694-0f12fbe1d6ed',
        '268b0c17-9c69-4a3c-81a8-80ade12ce940',
        '023b3a8e-dfb0-49ad-95d7-2fb68dd2117d'
      ],
      'type': 'ship'
    },
    {
      'id': 'cd0d186a-30f9-48fe-9e3e-905438e6ddc0',
      'basePrice': 6050,
      'dateFrom': '2026-05-25T08:16:05.413Z',
      'dateTo': '2026-05-26T02:39:05.413Z',
      'destination': 'b5d8e963-a767-43e1-8e84-8aa33e3066cf',
      'isFavorite': true,
      'offers': [
        'f7a679f1-05c7-4e1a-9694-0f12fbe1d6ed',
        '268b0c17-9c69-4a3c-81a8-80ade12ce940',
        '023b3a8e-dfb0-49ad-95d7-2fb68dd2117d'
      ],
      'type': 'ship'
    },
    {
      'id': 'bfd5ed68-2faf-41b7-87cf-2b31ef07f2bb',
      'basePrice': 1829,
      'dateFrom': '2026-05-27T16:12:05.413Z',
      'dateTo': '2026-05-29T17:09:05.413Z',
      'destination': 'bda52f8a-b6f7-4a9b-a4e6-ab72ff3e21c2',
      'isFavorite': true,
      'offers': [],
      'type': 'drive'
    },
    {
      'id': '4e046f0f-9393-4212-ad45-e54b7ee27181',
      'basePrice': 139,
      'dateFrom': '2026-05-30T18:21:05.413Z',
      'dateTo': '2026-05-31T07:41:05.413Z',
      'destination': '6848bc90-62e3-42b1-bcaa-759211e1b0b2',
      'isFavorite': true,
      'offers': [],
      'type': 'drive'
    },
    {
      'id': '2f382d6c-5342-4741-a831-2216030b3987',
      'basePrice': 2284,
      'dateFrom': '2026-06-01T17:23:05.413Z',
      'dateTo': '2026-06-02T17:02:05.413Z',
      'destination': 'bda52f8a-b6f7-4a9b-a4e6-ab72ff3e21c2',
      'isFavorite': false,
      'offers': [
        '63a1c0e1-d88c-438f-97bf-4a90a36808d7'
      ],
      'type': 'restaurant'
    },
    {
      'id': 'ad27ac47-15ea-4d40-b025-b68211913030',
      'basePrice': 8160,
      'dateFrom': '2026-06-03T14:30:05.413Z',
      'dateTo': '2026-06-05T11:35:05.413Z',
      'destination': 'cd61e4aa-0224-4786-a74d-9b864e905c8c',
      'isFavorite': false,
      'offers': [
        'a03dac48-cb93-4deb-8fb4-bbaf1503ab2d',
        '0483c37d-b4c9-4808-b091-12eecaf4c03e',
        '69ed5217-4426-4d9f-8453-269c7614e230'
      ],
      'type': 'flight'
    },
    {
      'id': '4bd4b614-daac-43c7-aa48-e5925c16e87d',
      'basePrice': 771,
      'dateFrom': '2026-06-06T05:36:05.413Z',
      'dateTo': '2026-06-07T18:48:05.413Z',
      'destination': '097636c6-2730-40b5-b153-bb61480eb778',
      'isFavorite': false,
      'offers': [],
      'type': 'flight'
    },
    {
      'id': '43b9c124-9fee-48bf-9dc0-411cdfcc5a3e',
      'basePrice': 3674,
      'dateFrom': '2026-06-08T05:45:05.413Z',
      'dateTo': '2026-06-09T21:22:05.413Z',
      'destination': 'cd61e4aa-0224-4786-a74d-9b864e905c8c',
      'isFavorite': true,
      'offers': [],
      'type': 'bus'
    },
    {
      'id': '47dd713b-51af-45b6-bb4b-662eeac96b9c',
      'basePrice': 1974,
      'dateFrom': '2026-06-10T18:47:05.413Z',
      'dateTo': '2026-06-11T05:55:05.413Z',
      'destination': '879bb5cb-4f7f-488a-8818-2fcbfb6f705a',
      'isFavorite': true,
      'offers': [
        'afe3e2fb-7529-458d-9162-7c5375736b3d'
      ],
      'type': 'train'
    },
    {
      'id': '6964d384-acc5-4415-b385-872f980253a4',
      'basePrice': 9397,
      'dateFrom': '2026-06-12T21:58:05.413Z',
      'dateTo': '2026-06-13T20:43:05.413Z',
      'destination': '097636c6-2730-40b5-b153-bb61480eb778',
      'isFavorite': false,
      'offers': [
        'c3e5bb44-0608-46fb-8f86-48a4664e2466',
        'af892bc3-c4a4-40bf-b184-f46eced52897'
      ],
      'type': 'check-in'
    }
  ];

export { points };
