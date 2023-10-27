const fs = require('fs');
const path = require('path');

const folderStructure = {
  'CELEBRATIONS': {
    'client': {
      'public': {
        'index.html': '',
        'styles': {
          'main.css': '',
          'reset.css': '',
        },
        'images': {
          'logo.png': '',
          'background.jpg': '',
        },
      },
      'src': {
        'components': {
          'Menu': {
            'Menu.js': '',
            'Menu.css': '',
          },
        },
        'screens': {
          'Home.js': '',
          'MenuScreen.js': '',
          'ReservationScreen.js': '',
        },
        'services': {
          'api.js': '',
          'templateUpdater.js': '',
        },
        'App.js': '',
      },
      'package.json': '',
    },
    'mobile': {
      'assets': {
        'logo.png': '',
      },
      'components': {
        'Menu': {
          'Menu.js': '',
          'Menu.css': '',
        },
        'ReservationForm': {
          'ReservationForm.js': '',
          'ReservationForm.css': '',
        },
      },
      'screens': {
        'Home.js': '',
        'MenuScreen.js': '',
        'ReservationScreen.js': '',
      },
      'services': {
        'api.js': '',
        'navigation.js': '',
      },
      'App.js': '',
      'package.json': '',
    },
    'server': {
      'controllers': {
        'menuController.js': '',
        'reservationController.js': '',
      },
      'models': {
        'Menu.js': '',
        'Reservation.js': '',
      },
      'routes': {
        'menuRoutes.js': '',
        'reservationRoutes.js': '',
      },
      'config': {
        'database.js': '',
      },
      'server.js': '',
      'package.json': '',
    },
    'database': {
      'migrations': {
        '001_create_menu_table.js': '',
        '002_create_reservation_table.js': '',
      },
      'seeds': {
        '001_seed_menu.js': '',
        '002_seed_reservation.js': '',
      },
      'knexfile.js': '',
    },
    'tests': {
      'menu.test.js': '',
      'reservation.test.js': '',
    },
    'node_modules': {},
    '.gitignore': '',
    'README.md': '',
    'package.json': '',
  },
};

const targetDirectory = './'; // Specify the directory where you want to create the 'CELEBRATIONS' folder

function createFolderStructure(basePath, structure) {
  for (const item in structure) {
    const itemPath = path.join(basePath, item);

    if (typeof structure[item] === 'object') {
      fs.mkdirSync(itemPath);
      createFolderStructure(itemPath, structure[item]);
    } else {
      fs.writeFileSync(itemPath, structure[item]);
    }
  }
}

createFolderStructure(targetDirectory, folderStructure);
