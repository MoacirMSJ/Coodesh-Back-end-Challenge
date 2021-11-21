import {User} from '../protocols/user';
export const userData = ():User => {
  return {
    gender: "male",
    name: {
      title: "Mr",
      first: "Kenan",
      last: "Karaböcek"
    },
    location: {
      street: {
        number: 7203,
        name: "Atatürk Sk"
      },
      city: "İstanbul",
      state: "Sinop",
      country: "Turkey",
      postcode: "94677",
      coordinates: {
        latitude: "74.2117",
        longitude: "-127.0795"
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa"
      }
    },
    email: "kenan.karabocek@example.com",
    login: {
      uuid: "878b06bf-54d5-4745-88e6-e2c3f770202b",
      username: "whitegorilla895",
      password: "ladder",
      salt: "ur2xErxs",
      md5: "5be058c444dff79c9d1b55125223c00d",
      sha1: "154acde58d5fae4f60a8767bbde1e4944ff9bbcf",
      sha256: "392c0e2d1593a474e164253e38494376b07cb20d2d19b13d5ee4c7cf44db4492"
    },
    dob: {
      date: "1953-03-05T22:56:54.338Z",
      age: 68
    },
    registered: {
      date: "2016-03-13T16:46:49.282Z",
      age: 5
    },
    phone: "(944)-010-1731",
    cell: "(384)-821-3295",
    id: {
      name: "",
      value: null
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
    },
    nat: "TR"
  }
}