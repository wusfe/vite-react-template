import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface useInfoProps {
    isMultiProvince: boolean,
    provinceList: Array<{
        code: string,
        count: number,
        district: string,
    }>,
    refreshCheckList: boolean,


    name: string
}

export const initialState: useInfoProps = {
    provinceList: [],
    isMultiProvince: false,
    refreshCheckList: false,



    name: 'iODer' 
    
}

export const settingUseInfo = createSlice({
    name: 'useInfo',
    initialState,
    reducers: {
        setMultiProvince(state, action: PayloadAction<boolean>) {
            state.isMultiProvince = action.payload;
        },
        setProvinceList(state, action: PayloadAction<Array<{
            code: string,
            count: number,
            district: string,
        }>>) {
            state.provinceList = action.payload;
        },
        setRefreshCheckList(state, action: PayloadAction<boolean>) {
            state.refreshCheckList = action.payload;
        },

        setUserName(state, action: PayloadAction<string>){
            state.name = action.payload
        }
    }
})

export const { setMultiProvince, setProvinceList, setRefreshCheckList,  setUserName } = settingUseInfo.actions;
export const getMultiProvince = (state: RootState) => state.useInfo.isMultiProvince;
export const getProvinceList = (state: RootState) => state.useInfo.provinceList;
export const getRefreshCheckList = (state: RootState) => state.useInfo.refreshCheckList;


export const getUserName = (state: RootState) => state.useInfo.name;

export default settingUseInfo.reducer;