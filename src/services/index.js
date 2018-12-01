import request from './request';
import { async } from 'rxjs/internal/scheduler/async';
const baseUrl = 'http://localhost:8080/';
const makeUrl = val => `${baseUrl + val}`;

export async function getChoiceBook() {
  return request(`${makeUrl('book/choice')}`);
}

export async function getAllBooks() {
  return request(`${makeUrl('book/all')}`);
}

export async function getBookById(id) {
  return request(`${makeUrl('book/bookById?id=' + id)}`);
}
