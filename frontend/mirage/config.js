export default function() {
   this.namespace = '/api/v1/';
   let data = [{
         "id": "1",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай персонажа советского фильма",
           "description": "По описанию ситуации угадай персонажа советского фильма, который в ней участвовал",
           "category": {
             "data": {
               "id": "1",
               "type": "categories",
               "attributes": {
                 "title": "Фильмы"
               }
             }
           }
         }
       },
       {
         "id": "2",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай персонажа",
           "description": "Угадай персонажа по описанию",
           "category": {
             "data": {
               "id": "1",
               "type": "categories",
               "attributes": {
                 "title": "Фильмы"
               }
             }
           }
         }
       },
       {
         "id": "4",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай фильм по кадру",
           "description": "По представленному кадру из фильма угадай фильм",
           "category": {
             "data": {
               "id": "1",
               "type": "categories",
               "attributes": {
                 "title": "Фильмы"
               }
             }
           }
         }
       },
       {
         "id": "5",
         "type": "quizzes",
         "attributes": {
           "title": "Угадай музыкальную группу",
           "description": "По биографии группы угадай название",
           "category": {
             "data": {
               "id": "2",
               "type": "categories",
               "attributes": {
                 "title": "Музыка"
               }
             }
           }
         }
      },{
      "type": "quizzes",
      "id": "6",
      "attributes": {
         "title": "На знание World of Warcraft",
         "description": "На 100% не пройден еще ни разу",
         "category": {
            "data": {
               "id": 321,
               "type": "categories",
               "attributes": {
                  "title": "MMORPG"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "6",
      "attributes": {
         "title": "Угадай кошачьего по фото!",
         "description": "Легкий, развлекательный тест",
         "category": {
            "data": {
               "id": 123,
               "type": "categories",
               "attributes": {
                  "title": "О природе"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "8",
      "attributes": {
         "title": "Чилийские леса полны опасностей",
         "description": "Ищем истину в слухах и домыслах",
         "category": {
            "data": {
               "id": 123,
               "type": "categories",
               "attributes": {
                  "title": "О природе"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "9",
      "attributes": {
         "title": "World of tanks: заурядная игра или народный феномен?",
         "description": "Выясняем мнение населения о популярной игре",
         "category": {
            "data": {
               "id": 321,
               "type": "categories",
               "attributes": {
                  "title": "MMORPG"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "10",
      "attributes": {
         "title": "АЗАЗАЗАЗ",
         "description": "Неадекватный тест",
         "category": {
            "data": {
               "id": 222,
               "type": "categories",
               "attributes": {
                  "title": "Непонятно что"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "11",
      "attributes": {
         "title": "Вулканы мира",
         "description": "Много ли вы знаете о настоящей мощи природы?",
         "category": {
            "data": {
               "id": 123,
               "type": "categories",
               "attributes": {
                  "title": "О природе"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "12",
      "attributes": {
         "title": "Начальный уровнь Lineage 2",
         "description": "Тест базовых знаний",
         "category": {
            "data": {
               "id": 321,
               "type": "categories",
               "attributes": {
                  "title": "MMORPG"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "13",
      "attributes": {
         "title": "Тестик про сумерки!!",
         "description": "Невообразимо прекрасный тест, обязательно к прохождению",
         "category": {
            "data": {
               "id": 444,
               "type": "categories",
               "attributes": {
                  "title": "Восхитительно"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "14",
      "attributes": {
         "title": "Давай пробни",
         "description": "Нереальный тест, непроходимый прям",
         "category": {
            "data": {
               "id": 444,
               "type": "categories",
               "attributes": {
                  "title": "Восхитительно"
               }
            }
         }
      }
   },
   {
      "type": "quizzes",
      "id": "15",
      "attributes": {
         "title": "Готическая Барселона",
         "description": "Серия тестов о выживании в Европе",
         "category": {
            "data": {
               "id": 98,
               "type": "categories",
               "attributes": {
                  "title": "Помоги Маше выжить в Испании"
               }
            }
         }
      }
   }];
   this.get('/quizzes', function(db, request) {
      if(request.queryParams.categoryid !== undefined) {
         let filteredData = data.filter(function(item) {
            return item.attributes.category.data.id === request.queryParams.categoryid;
         });
         return {
            data: filteredData
         };
      } else {
         return {
            data: data
         };
      }
   });
}