//React
import { CSSProperties } from 'react'


export const AppColors = {
    primary: 'rgb(236, 172, 72)',
    accent: 'rgb(86, 86, 86)',
    fontColor: 'rgb(55, 55, 55)',
    whiteScreenOverlay: 'rgba(255, 255, 255, 0.5)',
    darkScreenOverlay: 'rgba(50, 50, 50, 0.5)',
    chillBlue: 'rgb(63, 133, 202)',
}

export const AppConstants = {
    
}

interface StylesObject {
    screenDefaultWrapper: CSSProperties;
    loaderLightOverlayContainer: CSSProperties;
    loaderDarkOverlayContainer: CSSProperties;
}
export const AppStyles: StylesObject = {
    screenDefaultWrapper: {
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
        boxShadow: '0 5px 5px rgba(50,50,50,0.5)',
        flex: 1,        
    },
    loaderLightOverlayContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: AppColors.whiteScreenOverlay,
    },
    loaderDarkOverlayContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: AppColors.darkScreenOverlay,
    }
}
