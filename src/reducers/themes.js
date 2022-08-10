import {
    LIGHT_THEME,
    DARK_THEME
} from "@/constants";

const initialState = {
    theme: LIGHT_THEME
}

const themes = (state = initialState, { type }) => {

    switch (type) {
        case LIGHT_THEME:
            return {
                ...state,
                theme: LIGHT_THEME
            }
        case DARK_THEME:
            return {
                ...state,
                theme: DARK_THEME
            }
        default:
            return state
    }
}

export default themes;