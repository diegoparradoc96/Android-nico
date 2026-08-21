import React, { ReactNode } from 'react';
/* papper */
import { MD3LightTheme, DefaultTheme, PaperProvider } from 'react-native-paper';


const theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,

        primary: '#E65100',
        secondary: '#263238',
        tertiary: "#263238",
        neutral: "#F5F5F5",        

        background: '#F5F7FA',
        surface: '#FFFFFF',
        error: '#D32F2F',

        // Colores personalizados
        primary_1: '#FFEDE7',
        primary_2: '#FFDBCF',
        primary_3: '#FFB59A',
        primary_4: '#FF8C5F',
        primary_5: '#F95E14',
        primary_6: '#D24900',
        primary_7: '#A83900',
        primary_8: '#802A00',
        primary_9: '#5B1B00',

        secondary_1: "#E6F3FB",
        secondary_2: "#D7E4EC",
        secondary_3: "#BBC8D0",
        secondary_4: "#A0ADB5",
        secondary_5: "#86939A",
        secondary_6: "#6C7980",
        secondary_7: "#546067",
        secondary_8: "#3C494F",
        secondary_9: "#263238",

        tertiary_1: "#DFF4FF",
        tertiary_2: "#CBE7F5",
        tertiary_3: "#AFCBD8",
        tertiary_4: "#94AFBC",
        tertiary_5: "#7A95A1",
        tertiary_6: "#617B87",
        tertiary_7: "#48626E",
        tertiary_8: "#304A55",
        tertiary_9: "#19343E",

        neutral_1: "#F1F1F1",
        neutral_2: "#E2E2E2",
        neutral_3: "#C6C6C7",
        neutral_4: "#C6C6C7",
        neutral_5: "#AAABAB",
        neutral_6: "#909191",
        neutral_7: "#767777",
        neutral_8: "#5D5F5F",
        neutral_9: "#454747",
    },
};

type AppTheme = typeof theme;

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <PaperProvider theme={theme}>
            {children}
        </PaperProvider>

    );
};

export { GlobalProvider };
export type { AppTheme };