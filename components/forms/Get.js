import React, { Component, useState, useRef, useEffect } from 'react'
import { Formik, Form, Field, FieldArray, FastField, ErrorMessage, } from 'formik';
import { TextField, RadioGroup, Select, Checkbox } from 'formik-material-ui';
import { AddCircle, RemoveCircle, ArrowUpwardRounded, ArrowDownwardRounded, } from '@material-ui/icons';
import * as Yup from 'yup';
import cookie from 'js-cookie';
import styled from 'styled-components';
import { Button } from './Button'
import { Typography, Input } from '@material-ui/core';


export async function GetForm(url) {
    const { logintoken } = cookie.get();
    console.log({ logintoken })
    try {
        const apiUrl = url;
        const response = await fetch(apiUrl, {
            credentials: 'include',
            headers: {
                Authorization: 'Bearer ' + logintoken,
            }
        });
        const data = await response.json();
        if (data.status === 'success') {
            console.log('getForm', data);
            console.log('tkn', data.__csrf_token)
            return data;
        } else {
            let error = new Error(data.error)
            error.response = response
            throw error
        }
    } catch (error) {
        console.error(
            'Failed to get form, please try again', error
        )
        // return error.message
    }
    return
}