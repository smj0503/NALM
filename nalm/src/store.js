import { configureStore, createSlice } from '@reduxjs/toolkit'

let condition = createSlice({
  name : 'condition',
  initialState : {
    location : '',
    drink : '',
    nation : '',
    price : '',
    experience : '',
    time : '',
    amount : '',
    nalm_pick : '',
    drink_category : '',
    mood : '',
    group : '',
    ingredients : '',
    kor_category1 : '',
    kor_category2 : '',
    meat : ''
  },

  reducers : {
    // 1 위치 정보 입력 함수 (흑석 / 상도)
    addLocation(state, action){
      state.location = action.payload;
    },
    // 2 술 여부 정보 입력 함수 (o / x)
    addDrink(state, action){
      state.drink = action.payload;
    },
    // 3 국가 정보 입력 함수 (한식 / 일식 / 중식 / 미국 / 이태리 / 혼재)
    addNation(state, action){
      state.nation = action.payload;
    },
    // 4 가격 정보 입력 함수 (저렴 / 비쌈)
    addPrice(state, action){
      state.price = action.payload;
    },
    // 5 취향 정보 입력 함수 (익숙함 / 색다름)
    addExperience(state, action){
      state.experience = action.payload;
    },
    // 6 시간 정보 입력 함수 (1 / 2 / 3)
    addTime(state, action){
      state.time = action.payload;
    },
    // 7 양 정보 입력 함수 (적당 / 많음)
    addAmount(state, action){
      state.amount = action.payload;
    },
    // 8 낼름 픽 정보 입력 함수
    addNpick(state, action){
      state.nalm_pick = action.payload;
    },
    // 9 주종 정보 입력 함수 (양주 / 이자카야 / 호프 / 모두)
    addDcategory(state, action){
      state.drink_category = action.payload;
    },
    // 10 분위기 정보 입력 함수 (조용 / 신남)
    addMood(state, action){
      state.mood = action.payload;
    },
    // 11 다인원 정보 입력 함수 (o / x)
    addGroup(state, action){
      state.group = action.payload;
    },
    // 12 재료 정보 입력 함수 (육류 / 해산물)
    addIngredients(state, action){
      state.ingredients = action.payload;
    },
    // 13 한식 정보 입력 함수 (찌개 / 백반)
    addKcategory1(state, action){
      state.kor_category1 = action.payload;
    },
    // 14 한식 정보2 입력 함수 (돈까스 / 떡볶이 / 국수 / 아무거나)
    addKcategory2(state, action){
      state.kor_category2 = action.payload;
    },
    // 15 육류 정보 입력 함수 (o / x)
    addMeat(state, action){
      state.meat = action.payload;
    }
  }
});

export default configureStore({
  reducer: { 
    condition : condition.reducer
  }
}) ;

export let { 
  addAmount, addDcategory, addDrink, addExperience,
  addGroup, addIngredients, addKcategory1, addKcategory2,
  addLocation, addMeat, addMood, addNation, addNpick,
  addPrice, addTime
} = condition.actions 