export const apiDocumentation = {
  openapi: '3.0.0',
  info: {
    version: '1.0',
    title: 'Pharma API',
    description: 'API desafio back-end Coodesh',
    contact: {
      name: 'Moacir Mascarenha',
      url: 'https://github.com/MoacirMSJ',
    },
  },
  tags: [
    {
      name: 'CRUD pharma',
    },
  ],
  paths: {
    '/': {
      get: {
        tags: ['CRUD pharma'],
        description: 'Retornar uma mensagem "REST Back-end Challenge 20201209 Running',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                    type: 'json',
                    example: {message: 'REST Back-end Challenge 20201209 Running'}
                },
              },
            },
          },
        },
      },
    },

    '/users/{userId}': {
      get: {
        tags: ['CRUD pharma'],
        parameters: [
          {
            name: 'userId',
            in: 'path',
            shcema: {
              type: 'string',
            },
            required: true,
          },
        ],
        description: 'Retornar um usuário.',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                    $ref: '#components/schemas/UserResponse'
                },
              },
            },
          },
          '400': {
            description: 'Erro ao buscar usuário!',
            content: {
              'application/json': {
                schema: {
                  type: 'json',
                  example: { message: "Erro ao buscar usuário!" }
                },
              },
            },
          }
        },
      },
    },
    '/users': {
      get: {
        tags: ['CRUD pharma'],
        description: 'Retornar todos os usuários cadastrados.',
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#components/schemas/UserResponse',
                  },
                },
              },
            },
          },
          '400': {
            description: 'Erro ao criar usuário!',
            content: {
              'application/json': {
                schema: {
                  type: 'json',
                  example: { message: "Erro ao buscar usuários!" }
                },
              },
            },
          }
        },
      },
    },
    '/user': {
      post: {
        tags: ['CRUD pharma'],
        description: 'Criar usuário',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#components/schemas/User',
              },
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Usuário criado com sucesso!',
            content: {
              'application/json': {
                schema: {
                  type: 'json',
                  example: {"message": "Usuário criado!" }
                },
              },
            },
          },
          '400': {
            description: 'Erro ao criar usuário!',
            content: {
              'application/json': {
                schema: {
                  type: 'json',
                  example: { message: "Erro ao criar usuário!" }
                },
              },
            },
          }
        },
      },
    },
    '/users/{userId} ': {
      delete: {
        tags: ['CRUD pharma'],
        parameters: [
          {
            name: 'userId',
            in: 'path',
            shcema: {
              type: 'string',
            },
            required: true,
          },
        ],
        description: 'Deletar um usuário.',
        responses: {
          '200': {
            content: {
              'application/json': {
                 schema: {
                  type: 'json',
                  example: { message: "Usuário deletado!" }
                },
              },
            },
          },
          '400': {
            description: 'Erro ao deletar usuário!',
            content: {
              'application/json': {
                schema: {
                  type: 'json',
                  example: { message: "Erro ao deletar usuário!" }
                },
              },
            },
          }
        },
      },
    }
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          gender: {
            type: 'string',
            example: "male"
          },
          name: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: "Mr"
              },
              first: {
                type: 'string',
                example: "Kenan"
              },
              last: {
                type: 'string',
                example: "Karaböcek"
              }
            }
          },
          location: {
            type: 'object',
            properties: {
              street: {
                type: 'object',
                properties: {
                  number: {
                    type: 'number',
                    example: 0
                  },
                  name: {
                    type: 'string',
                    example: 'Atatürk Sk'
                  }
                }
              },
              city: {
                type: 'string',
                example: "İstanbul"
              },
              state: {
                type: 'string',
                example: "Sinop"
              },
              country: {
                type: 'string',
                example: "Turkey"
              },
              postcode: {
                type: 'string',
                example: "94677"
              },
              coordinates: {
                type: 'object',
                properties: {
                  latitude: {
                    type: 'string',
                    example: "74.2117"
                  },
                  longitude: {
                    type: 'string',
                    example: "-127.0795"
                  }
                }
              },
              timezone: {
                type: 'object',
                properties: {
                  offset: {
                    type: 'string',
                    example: "+2:00"
                  },
                  description: {
                    type: 'string',
                    example: "Kaliningrad, South Africa"
                  } 
                } 
              }
            }
            
          },
          email: {
            type: 'string',
            example: "kenan.karabocek@example.com"
          },
          login: {
            type: 'object',
            properties: {
              uuid: {
                    type: 'string',
                    example: "878b06bf-54d5-4745-88e6-e2c3f770202b"
                  },
              username: {
                    type: 'string',
                    example: "whitegorilla895"
                  },
              password: {
                    type: 'string',
                    example: "ladder"
                  },
              salt: {
                    type: 'string',
                    example: "ur2xErxs"
                  } ,
              md5: {
                    type: 'string',
                    example: "5be058c444dff79c9d1b55125223c00d"
                  },
              sha1: {
                    type: 'string',
                    example: "154acde58d5fae4f60a8767bbde1e4944ff9bbcf"
                  },
              sha256: {
                    type: 'string',
                    example: "392c0e2d1593a474e164253e38494376b07cb20d2d19b13d5ee4c7cf44db4492"
                  } 
            }
          },
          dob: {
            type: 'object',
            properties: {
              date: {
                type: 'date',
                example: "1953-03-05T22:56:54.338Z"
              },
              age: {
                type: 'number',
                example: 68
              }
            }
          },
          registered: {
            type: 'object',
            properties: {
              date: {
                type: 'date',
                example: "1953-03-05T22:56:54.338Z"
              },
              age: {
                type: 'number',
                example: 5
              }
            }
          },
          phone: {
            type: 'string',
            example: "(944)-010-1731"
          },
          cell: {
            type: 'string',
            example: "(384)-821-3295"
          },
          id: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                example: ""
              },
              value: {
                type: 'string',
                example: "ASDS"
              }
            }
          },
          picture: {
            type: 'object',
            properties: {
              large: {
                type: 'string',
                example: "https://randomuser.me/api/portraits/men/21.jpg"
              },
              medium: {
                type: 'string',
                example: "https://randomuser.me/api/portraits/med/men/21.jpg"
              },
              thumbnail: {
                type: 'string',
                example: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
              }
            }
            
          },
          nat: {
            type: 'string',
            example: "TR"
          }
        }
      },
      UserResponse: {
        type: 'object',
        properties: {
          gender: {
            type: 'string',
            example: "male"
          },
          name: {
            type: 'object',
            properties: {
              title: {
                type: 'string',
                example: "Mr"
              },
              first: {
                type: 'string',
                example: "Kenan"
              },
              last: {
                type: 'string',
                example: "Karaböcek"
              }
            }
          },
          location: {
            type: 'object',
            properties: {
              street: {
                type: 'object',
                properties: {
                  number: {
                    type: 'number',
                    example: 0
                  },
                  name: {
                    type: 'string',
                    example: 'Atatürk Sk'
                  }
                }
              },
              city: {
                type: 'string',
                example: "İstanbul"
              },
              state: {
                type: 'string',
                example: "Sinop"
              },
              country: {
                type: 'string',
                example: "Turkey"
              },
              postcode: {
                type: 'string',
                example: "94677"
              },
              coordinates: {
                type: 'object',
                properties: {
                  latitude: {
                    type: 'string',
                    example: "74.2117"
                  },
                  longitude: {
                    type: 'string',
                    example: "-127.0795"
                  }
                }
              },
              timezone: {
                type: 'object',
                properties: {
                  offset: {
                    type: 'string',
                    example: "+2:00"
                  },
                  description: {
                    type: 'string',
                    example: "Kaliningrad, South Africa"
                  } 
                } 
              }
            }
            
          },
          email: {
            type: 'string',
            example: "kenan.karabocek@example.com"
          },
          login: {
            type: 'object',
            properties: {
              uuid: {
                    type: 'string',
                    example: "878b06bf-54d5-4745-88e6-e2c3f770202b"
                  },
              username: {
                    type: 'string',
                    example: "whitegorilla895"
                  },
              password: {
                    type: 'string',
                    example: "ladder"
                  },
              salt: {
                    type: 'string',
                    example: "ur2xErxs"
                  } ,
              md5: {
                    type: 'string',
                    example: "5be058c444dff79c9d1b55125223c00d"
                  },
              sha1: {
                    type: 'string',
                    example: "154acde58d5fae4f60a8767bbde1e4944ff9bbcf"
                  },
              sha256: {
                    type: 'string',
                    example: "392c0e2d1593a474e164253e38494376b07cb20d2d19b13d5ee4c7cf44db4492"
                  } 
            }
          },
          dob: {
            type: 'object',
            properties: {
              date: {
                type: 'date',
                example: "1953-03-05T22:56:54.338Z"
              },
              age: {
                type: 'number',
                example: 68
              }
            }
          },
          registered: {
            type: 'object',
            properties: {
              date: {
                type: 'date',
                example: "1953-03-05T22:56:54.338Z"
              },
              age: {
                type: 'number',
                example: 5
              }
            }
          },
          phone: {
            type: 'string',
            example: "(944)-010-1731"
          },
          cell: {
            type: 'string',
            example: "(384)-821-3295"
          },
          id: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                example: ""
              },
              value: {
                type: 'string',
                example: "ASDS"
              }
            }
          },
          picture: {
            type: 'object',
            properties: {
              large: {
                type: 'string',
                example: "https://randomuser.me/api/portraits/men/21.jpg"
              },
              medium: {
                type: 'string',
                example: "https://randomuser.me/api/portraits/med/men/21.jpg"
              },
              thumbnail: {
                type: 'string',
                example: "https://randomuser.me/api/portraits/thumb/men/21.jpg"
              }
            }
            
          },
          nat: {
            type: 'string',
            example: "TR"
          },
          _id: {
            type: 'string',
            example: "619a7a0f0c95383e19730755"
          },
          imported_t: {
            type: 'string',
            example: "2021-11-28T16:55:43.785Z"
          },
          status: {
            type: 'string',
            example: "published"
          },
          __v: {
            type: 'number',
            example: 0
          }
        }
      },
    },
  },
  
};

