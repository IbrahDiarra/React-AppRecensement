export const UsersService = {
    getData() {
        return [
                {
                    id: 1001,
                    username: 'Choco',
                    firstname: 'Uzumaki',
                    lastname: 'Naruto',
                    phone: '0508073345',
                    role: 'Hokage'
                },
                {
                    id: 1001,
                    username: 'Choco',
                    firstname: 'Uzumaki',
                    lastname: 'Naruto',
                    phone: '0508073345',
                    role: 'Hokage'
                  },
                  {
                    id: 1002,
                    username: 'Sasuke89',
                    firstname: 'Uchiha',
                    lastname: 'Sasuke',
                    phone: '0508012345',
                    role: 'Rogue Ninja'
                  },
                  {
                    id: 1003,
                    username: 'Sakura123',
                    firstname: 'Haruno',
                    lastname: 'Sakura',
                    phone: '0508023456',
                    role: 'Medical Ninja'
                  },
                  {
                    id: 1004,
                    username: 'KakashiSensei',
                    firstname: 'Hatake',
                    lastname: 'Kakashi',
                    phone: '0508034567',
                    role: 'Former Hokage Advisor'
                  },
                  {
                    id: 1005,
                    username: 'Itachi_Uchiha',
                    firstname: 'Uchiha',
                    lastname: 'Itachi',
                    phone: '0508045678',
                    role: 'Former ANBU Captain'
                  },
                  {
                    id: 1006,
                    username: 'Jiraiya69',
                    firstname: 'Jiraiya',
                    lastname: 'Sensey',
                    phone: '0508056789',
                    role: 'Legendary Sannin'
                  },
                  {
                    id: 1007,
                    username: 'Tsunade',
                    firstname: 'Senju',
                    lastname: 'Tsunade',
                    phone: '0508067890',
                    role: 'Fifth Hokage'
                  },
                  {
                    id: 1008,
                    username: 'GaaraSand',
                    firstname: 'Gaara',
                    lastname: 'Suna',
                    phone: '0508090123',
                    role: 'Kazekage'
                  },
                  {
                    id: 1009,
                    username: 'Minato_Namikaze',
                    firstname: 'Namikaze',
                    lastname: 'Minato',
                    phone: '0508012345',
                    role: 'Fourth Hokage'
                  },
                  {
                    id: 1010,
                    username: 'KushinaUzumaki',
                    firstname: 'Uzumaki',
                    lastname: 'Kushina',
                    phone: '0508023456',
                    role: 'Mother of Naruto'
                  },
                  {
                    id: 1011,
                    username: 'Obito_Uchiha',
                    firstname: 'Uchiha',
                    lastname: 'Obito',
                    phone: '0508034567',
                    role: 'Former Akatsuki Member'
                  },
                  {
                    id: 1012,
                    username: 'HinataHyuga',
                    firstname: 'Hyuga',
                    lastname: 'Hinata',
                    phone: '0508045678',
                    role: 'Byakugan Princess'
                  },
                  {
                    id: 1013,
                    username: 'Shikamaru_Nara',
                    firstname: 'Nara',
                    lastname: 'Shikamaru',
                    phone: '0508056789',
                    role: 'Strategic Genius'
                  },
                  {
                    id: 1014,
                    username: 'Ino_Yamanaka',
                    firstname: 'Yamanaka',
                    lastname: 'Ino',
                    phone: '0508067890',
                    role: 'Flower Ninja'
                  },
                  {
                    id: 1015,
                    username: 'Choji_Akimichi',
                    firstname: 'Akimichi',
                    lastname: 'Choji',
                    phone: '0508078901',
                    role: 'Food Lover'
                  },
                  {
                    id: 1016,
                    username: 'Rock_Lee',
                    firstname: 'Rock',
                    lastname: 'Lee',
                    phone: '0508090123',
                    role: 'Taijutsu Specialist'
                  },
                  {
                    id: 1017,
                    username: 'Neji_Hyuga',
                    firstname: 'Hyuga',
                    lastname: 'Neji',
                    phone: '0508012345',
                    role: 'Byakugan Master'
                  },
                  {
                    id: 1018,
                    username: 'Tenten',
                    firstname: '',
                    lastname: 'Tenten',
                    phone: '0508023456',
                    role: 'Weapons Specialist'
                  },
                  {
                    id: 1019,
                    username: 'Kiba_Inuzuka',
                    firstname: 'Inuzuka',
                    lastname: 'Kiba',
                    phone: '0508034567',
                    role: 'Beast Tamer'
                  },
                  {
                    id: 1020,
                    username: 'Shino_Aburame',
                    firstname: 'Aburame',
                    lastname: 'Shino',
                    phone: '0508045678',
                    role: 'Insect Ninja'
                  }
        ]
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
}