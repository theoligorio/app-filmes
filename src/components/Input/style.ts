import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

export const InputArea = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const InputSearch = styled.TextInput.attrs({
    placeholderTextColor: "#fff",
  })`
    flex: 1;
    height: 40px;
    background-color: #4d4d4d;
    border-radius: 20px;
    padding-left: 20px;
    font-size: 14px;
    color: #fff;
  `;
  
  export const ButtonSearch = styled.TouchableOpacity`
    margin-left: 5px;
  `;
  
  export const SearchIcon = styled(Feather)`
    font-size: 24px;
    color: #fff;
  `;