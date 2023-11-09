import AvatarImage from "@assets/avatar.png"
import LogoImage from "@assets/logo.png"
import styled from "styled-components/native"


export const Container = styled.View`
    width: 100%;
    margin: 42px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image.attrs({ source: LogoImage })`
    width: 82px;
	height: 37px;
`

export const Avatar = styled.Image.attrs({ source: AvatarImage })`
    width: 40px;
	height: 40px;
`