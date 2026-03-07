const destinations = [
  {
    'id': 'bda52f8a-b6f7-4a9b-a4e6-ab72ff3e21c2',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'name': 'Budapest',
    'pictures': [{
      'src': 'https://loremflickr.com/248/152?random=230',
      'description': 'It s a random photo'

    }]
  },
  {
    'id': '6848bc90-62e3-42b1-bcaa-759211e1b0b2',
    'description': 'Nagasaki - a true asian pearl',
    'name': 'Nagasaki',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/12.jpg',
        'description': 'Nagasaki middle-eastern paradise'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/13.jpg',
        'description': 'Nagasaki with an embankment of a mighty river as a centre of attraction'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/20.jpg',
        'description': 'Nagasaki with an embankment of a mighty river as a centre of attraction'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/4.jpg',
        'description': 'Nagasaki in a middle of Europe'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Nagasaki a perfect place to stay with a family'
      }
    ]
  },
  {
    'id': '89fbaac0-8397-4440-ad40-537403195249',
    'description': 'Monaco - full of of cozy canteens where you can try the best coffee in the Middle East',
    'name': 'Monaco',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/5.jpg',
        'description': 'Monaco full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Monaco in a middle of Europe'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Monaco with a beautiful old town'
      }
    ]
  },
  {
    'id': '561938bd-f278-4fed-99bc-9c4384baa6d1',
    'description': 'Saint Petersburg - in a middle of Europe',
    'name': 'Saint Petersburg',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/15.jpg',
        'description': 'Saint Petersburg with crowded streets'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/14.jpg',
        'description': 'Saint Petersburg in a middle of Europe'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/4.jpg',
        'description': 'Saint Petersburg famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Saint Petersburg in a middle of Europe'
      }
    ]
  },
  {
    'id': 'c7e7fb9c-1ac5-4b3b-a5b1-b5d85a3e42e2',
    'description': 'Berlin - in a middle of Europe',
    'name': 'Berlin',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/5.jpg',
        'description': 'Berlin famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/11.jpg',
        'description': 'Berlin full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/6.jpg',
        'description': 'Berlin a perfect place to stay with a family'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Berlin middle-eastern paradise'
      }
    ]
  },
  {
    'id': 'cd61e4aa-0224-4786-a74d-9b864e905c8c',
    'description': 'Munich - with an embankment of a mighty river as a centre of attraction',
    'name': 'Munich',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Munich for those who value comfort and coziness'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/11.jpg',
        'description': 'Munich full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Munich famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Munich with crowded streets'
      }
    ]
  },
  {
    'id': '879bb5cb-4f7f-488a-8818-2fcbfb6f705a',
    'description': 'Chamonix - for those who value comfort and coziness',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/12.jpg',
        'description': 'Chamonix is a beautiful city'
      }
    ]
  },
  {
    'id': '1542f4f5-2f9b-4767-94f3-21cb636cd7f5',
    'description': 'Paris - for those who value comfort and coziness',
    'name': 'Paris',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/1.jpg',
        'description': 'Paris with an embankment of a mighty river as a centre of attraction'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/10.jpg',
        'description': 'Paris famous for its crowded street markets with the best street food in Asia'
      }
    ]
  },
  {
    'id': 'b5d8e963-a767-43e1-8e84-8aa33e3066cf',
    'description': '',
    'name': 'Helsinki',
    'pictures': []
  },
  {
    'id': '097636c6-2730-40b5-b153-bb61480eb778',
    'description': 'Geneva - with an embankment of a mighty river as a centre of attraction',
    'name': 'Geneva',
    'pictures': [
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Geneva a true asian pearl'
      },
      {
        'src': 'https://22.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Geneva a true asian pearl'
      }
    ]
  }
];

export { destinations };
