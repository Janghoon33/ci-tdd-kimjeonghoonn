import React from "react";
import {render, fireEvent} from '@testing-library/react'
import TodoApp_kimjeonghoonn from "./Todoapp_kimjeonghoonn";

describe('<TodoApp_kimjeonghoonn />', () => {
    it('renders TodoForm TodoList', () => {
        const {getByText, getByTestId} = render(<TodoApp_kimjeonghoonn />);
        getByText('등록'); // TodoForm 화면에 있는지 확인
        getByTestId('TodoList'); // TodoList 화면에 있는지 확인
    });
})