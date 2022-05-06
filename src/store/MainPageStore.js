import FirstKreslo from "@/../public/img/first_kreslo.png"
import SecondKreslo from "@/../public/img/second_kreslo.png"
export const MainPageStore  = {
    state: () => ({
        headerCity: 'Киев',
        basketCounter: 0,
        productFirstCardProperties: {
            productName: 'Samurai KL-1.04 Темно-коричневый',
            productPriceNew: '23 000 грн',
            productPriceOld: '27 000 грн',
            imgUrlPath: FirstKreslo,
            id: 0
        },
        productSecondCardProperties: {
            productName: 'Samurai KL-1.05 Темно-черный',
            productPriceNew: '24 000 грн',
            productPriceOld: '27 000 грн',
            imgUrlPath: SecondKreslo,
            id: 1,
        },
        catalogSelectValue: 0,
    }),
    mutations: {
        SET_SELECT_VALUE(state, newValue) {
            state.catalogSelectValue = newValue;
        },
        setHeaderCity(state, headerCity) {
            state.headerCity = headerCity;
        },
        setBasketCounter(state, basketCounter) {
            state.basketCounter = basketCounter;
        },
        BASKET_ADD_NUMBER(state, basketCounter) {
            state.basketCounter += 1;
        }
    },
    getters: {
        getSelectValue(state) {
            return state.catalogSelectValue;
        },
        getBasketCounterValue(state) {
            return state.basketCounter;
        }
    },
    actions: {

    }
}