import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyledContainer,
    InnerContainer,
    ShopContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    Colors,
    StyledButton,
    ButtonText,
    Line,
    ShopImage,
    Avatar
} from './../components/styles'


const Account = ({navigation}) => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <ShopImage/>
                <ShopContainer>
                    <PageTitle welcome={true}>Welcome to the Drive 5 Store</PageTitle>
                    <SubTitle welcome={true}>John Doe</SubTitle>
                    <SubTitle welcome={true}>johndoe56</SubTitle>
                    <StyledFormArea>
                        <Avatar />
                        <Line />
                        <StyledButton onPress={() => navigation.navigate("Login")}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </ShopContainer>
            </InnerContainer>
        </StyledContainer>
    )
}


export default Account;