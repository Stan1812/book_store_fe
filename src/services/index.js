import request from './request';
import { async } from 'rxjs/internal/scheduler/async';
const baseUrl = 'localhost:8080/';
const fakeData = [
  {
    name: '追风筝的人',
    score: 8.9,
    quote: '为你，千千万万遍',
    numberOfComments: 355403,
    author: '[美] 卡勒德·胡赛尼',
    press: '上海人民出版社',
    price: '29.00元',
    year: 2006,
  },
  {
    name: '解忧杂货店',
    score: 8.6,
    quote: '一碗精心熬制的东野牌鸡汤，拒绝很难',
    numberOfComments: 330632,
    author: '[日] 东野圭吾',
    press: '南海出版公司',
    price: '39.50元',
    year: 2014,
  },
  {
    name: '小王子',
    score: 9,
    quote: '献给长成了大人的孩子们',
    numberOfComments: 276181,
    author: '[法] 圣埃克苏佩里',
    press: '人民文学出版社',
    price: '22.00元',
    year: 2003,
  },
  {
    name: '白夜行',
    score: 9.1,
    quote: '暗夜独行的残破灵魂，爱与恶本就难分难舍',
    numberOfComments: 242679,
    author: '[日] 东野圭吾',
    press: '南海出版公司',
    price: '29.80元',
    year: 2008,
  },
  {
    name: '围城',
    score: 8.9,
    quote: '对于“人艰不拆”四个字最彻底的违抗',
    numberOfComments: 217595,
    author: '钱锺书',
    press: '人民文学出版社',
    price: '19.00',
    year: 1991,
  },
  {
    name: '三体',
    score: 8.8,
    quote: '你我不过都是虫子',
    numberOfComments: 196554,
    author: '刘慈欣',
    press: '重庆出版社',
    price: '23.00',
    year: 2008,
  },
  {
    name: '嫌疑人X的献身',
    score: 8.9,
    quote: '数学好是一种极致的浪漫',
    numberOfComments: 191391,
    author: '[日] 东野圭吾',
    press: '南海出版公司',
    price: '28.00',
    year: 2008,
  },
  {
    name: '挪威的森林',
    score: 8,
    quote: '村上之发轫，多少人的青春启蒙',
    numberOfComments: 209453,
    author: '[日] 村上春树',
    press: '上海译文出版社',
    price: '18.80元',
    year: 2001,
  },
];
const makeUrl = val => `${baseUrl + val}`;

export async function getChoiceBook(params) {
  // return request(`${makeUrl('book/choice')}`);
  return {list:fakeData}  
}

export async function getAllBooks() {
  return request(`${makeUrl('book/all')}`);
}
