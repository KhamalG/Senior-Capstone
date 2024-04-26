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
                
                <StyledButton onPress={() => navigation.navigate("Login")}>
                    <ButtonText>Logout</ButtonText>
                </StyledButton>
                    
            </InnerContainer>
        </StyledContainer>
    )
}


export default Account;