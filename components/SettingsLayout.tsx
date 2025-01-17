import { ReactNode } from "react";
import LightSettingPage from "../components/Settings/LightsSetting";

const SettingsLayout = ({children} : {children: ReactNode}) => {
    return (
        <div
        style={
                {
                    width: '2000px',
                    height: '522px',
                    display: 'flex'
                }
            }
        >

            {children}

        </div>
    )
}

export default SettingsLayout;