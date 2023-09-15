import { Action } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { Observable, catchError, debounceTime, map, mergeMap, of } from "rxjs";
import { loadUser, setData, setError } from "./postSlice";
import { ajax } from "rxjs/ajax";
const getRandom = ()=>Math.floor(Math.random() * 99 + 1);
export const onLoadPost = (action$: Observable<Action>) => {
  return action$.pipe(
    ofType(loadUser.type),
    mergeMap(() =>
      ajax
        .getJSON(`https://jsonplaceholder.typicode.com/post/${getRandom()}`)
        .pipe(
            debounceTime(1000),
          map((res) => setData(res)),
          catchError((err) => {
            console.log(err);
           return of(setError(err.message))
          })
        )
    )
  );
};
