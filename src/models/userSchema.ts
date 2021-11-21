import { Schema, model } from 'mongoose';
import {User} from '../protocols/user';

const userSchema = new Schema<User>({
  gender: {
    type: String,
    required: true
  },
  name: {
    title: {
      type: String,
      required: true
    },
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  location: {
    street: {
      number: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    postcode: {
      type: String,
      required: true
    },
    coordinates: {
      latitude: {
        type: String,
        required: true
      },
      longitude: {
        type: String,
        required: true
      },
    },
    timezone: {
      offset: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
    }
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  login: {
    uuid: {
      type: String,
      required: true,
      unique: true

    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    md5: {
      type: String,
      required: true
    },
    sha1: {
      type: String,
      required: true
    },
    sha256: {
      type: String,
      required: true
    }
  },
  dob: {
    date: {
      type: Date,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  registered: {
    date: {
      type: Date,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  },
  phone: {
    type: String
  },
  cell: {
    type: String
  },
  id: {
    name: {
      type: String
    },
    value: {
      type: String,
      unique: true
    }
  },
  picture: {
    large: {
      type: String
    },
    medium: {
      type: String
    },
    thumbnail: {
      type: String
    }
  },
  nat: {
    type: String
  },
  imported_t: {
    type: Date,
    default: () => Date.now() + 7*24*60*60*1000
  },
  status: {
    type: String,
    enum: ['trash','published'],
    default: 'published'
  },
},{id: false});


export const UserModel = model('User', userSchema);