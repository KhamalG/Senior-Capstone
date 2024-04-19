import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import {Formik} from 'formik'

import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    StyledButton,
    ButtonText,
    Line,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles'
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const {brand, darkLight, primary} = Colors;

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageTitle>Drive 5 Store</PageTitle>
                    <SubTitle>Account Signup</SubTitle>

                    <Formik
                        initialValues={{fullName: '', username: '', password: '', confirmPassword: ''}}
                        onSubmit={(values) => {
                            console.log(values);
                            navigation.navigate("Shop");
                        }}
                    >
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Full Name"
                                icon="person"
                                placeholder="John Doe"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fullName')} 
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                            />
                            <MyTextInput
                                label="Username"
                                icon="mail"
                                placeholder="johndoe56"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('username')} 
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')} 
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MyTextInput
                                label="Confirm Password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('confirmPassword')} 
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>....</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Already have an account?</ExtraText>
                                <TextLink>
                                    <TextLinkContent onPress={() => navigation.navigate("Login")}>Login</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30}  color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup
;