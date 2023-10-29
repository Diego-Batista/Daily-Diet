import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.base.gray_7};
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.brand.red_dark };
    font-size: 50px;
`