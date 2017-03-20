export default function() {
   this.namespace = '/api/v1/';
   let data = [{
      type: 'quizzes',
      id: '1',
      attributes: {
         title: 'На знание World of Warcraft',
         categorytitle: 'MMORPG',
         categoryid: 321,
         description: 'На 100% не пройден еще ни разу'
      }
   }, {
      type: 'quizzes',
      id: '2',
      attributes: {
         title: 'Угадай кошачьего по фото!',
         categorytitle: 'О природе',
         categoryid: 123,
         description: 'Легкий, развлекательный тест'
      }
   }, {
      type: 'quizzes',
      id: '3',
      attributes: {
         title: 'Чилийские леса полны опасностей',
         categorytitle: 'О природе',
         categoryid: 123,
         description: 'Ищем истину в слухах и домыслах'
      }
   }, {
      type: 'quizzes',
      id: '4',
      attributes: {
         title: 'World of tanks: заурядная игра или народный феномен?',
         categorytitle: 'MMORPG',
         categoryid: 321,
         description: 'Выясняем мнение населения о популярной игре'
      }
   },{
      type: 'quizzes',
      id: '5',
      attributes: {
         title: 'АЗАЗАЗАЗ',
         categorytitle: 'Непонятно что',
         categoryid: 222,
         description: 'Неадекватный тест'
      }
   }, {
      type: 'quizzes',
      id: '6',
      attributes: {
         title: 'Вулканы мира',
         categorytitle: 'О природе',
         categoryid: 123,
         description: 'Много ли вы знаете о настоящей мощи природы?'
      }
   }, {
      type: 'quizzes',
      id: '7',
      attributes: {
         title: 'Начальный уровнь Lineage 2',
         categorytitle: 'MMORPG',
         categoryid: 321,
         description: 'Тест базовых знаний'
      }
   }, {
      type: 'quizzes',
      id: '8',
      attributes: {
         title: 'Тестик про сумерки!!',
         categorytitle: 'Восхитительно',
         categoryid: 444,
         description: 'Невообразимо прекрасный тест, обязательно к прохождению'
      }
   }, {
      type: 'quizzes',
      id: '9',
      attributes: {
         title: 'Давай пробни',
         categorytitle: 'Восхитительно',
         categoryid: 444,
         description: 'Нереальный тест, непроходимый прям'
      }
   }, {
      type: 'quizzes',
      id: '10',
      attributes: {
         title: 'Готическая Барселона',
         categorytitle: 'Помоги Маше выжить в Испании',
         categoryid: 98,
         description: 'Серия тестов о выживании в Европе'
      }
   }];
   this.get('/quizzes', function(db, request) {
      if(request.queryParams.categoryid !== undefined) {
         let filteredData = data.filter(function(item) {
            return item.attributes.categoryid == request.queryParams.categoryid;
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