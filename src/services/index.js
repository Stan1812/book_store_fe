import request from './request';
import { async } from 'rxjs/internal/scheduler/async';
const baseUrl = 'http://localhost:8080/';
const makeUrl = val => `${baseUrl + val}`;

// user

export async function login(params) {
  return request(`${makeUrl('user/login')}`, {
    method: 'POST',
    body: params,
  });
}
export async function register(params) {
  return request(`${makeUrl('user/register')}`, {
    method: 'POST',
    body: params,
  });
}

//  book
export async function getChoiceBook() {
  return request(`${makeUrl('book/choice')}`);
}

export async function getAllBooks() {
  return request(`${makeUrl('book/all')}`);
}
export async function getBookByPage(page) {
  return request(`${makeUrl(`book/pageAll?page=${page}&size=10`)}`);
}
export async function getBookById(id) {
  return request(`${makeUrl(`book/bookById?id=${id}`)}`);
}

// shopping cart
export async function addToCart(data) {
  return request(`${makeUrl(`shopping/add?bookId=${data}&userId=111`)}`);
}
export async function getCart() {
  return request(`${makeUrl('shopping/getall')}`);
}
