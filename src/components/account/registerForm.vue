<template>
    <v-container class="justify-center text-center register-container">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="username"
                label="이름"
                :rules="[v => !!v || '이름을 입력해주세요.']"
                required
            ></v-text-field>

            <v-text-field
                v-model="nickname"
                label="닉네임"
                :rules="[v => !!v || '닉네임을 입력해주세요.']"
                required
            ></v-text-field>

            <v-text-field
                v-model="phoneNumber"
                label="핸드폰 번호 ( - 제외하고 입력해주세요. )"
                required
                :rules="phoneNumberRules"
                @keyup="phoneNumberCheck(phoneNumber)"
            ></v-text-field>

            <v-checkbox
                v-model="agreeRegisterCheck"
                :rules="[v => !!v || '회원가입에 동의가 필요합니다.']"
                label="회원가입에 동의하시겠습니까?"
                required
            ></v-checkbox>

            <v-btn
                color="#6200ea"
                class="mr-4 register-btn"
                @click="registerProcess()"
            >
                회원가입
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        valid: false,
        username: "",
        nickname: "",
        phoneNumber: "",
        phoneNumberRules: [
            v => !!v || '휴대폰 번호를 입력해주세요.',
            v => (v && v.length >= 10 && v.length <= 11) || '휴대폰 번호를 다시 입력해주세요.',
        ],
        agreeRegisterCheck: false
    }),

    methods: {
        registerProcess() {
            // 폼 공백 체크
            if (this.username.trim() == "" || this.nickname.trim() == "" || this.phoneNumber == "") {
                alert("입력 폼을 모두 입력해주세요.");
                return;
            }

            if (!this.agreeRegisterCheck) {
                alert("회원가입에 동의 체크 해주시기 바랍니다.");
                return
            }
            if (!this.valid) {
                alert("회원가입 양식이 잘못되었습니다.\n다시 입력해주세요.");
                return
            }

            // axios 호출
        },

        phoneNumberCheck(value) {
            this.phoneNumber = value.replace(/[^0-9]/g, '')
        }
    },
    watch:{
		phoneNumber(){
			return this.phoneNumber = this.phoneNumber.replace('/[^-가-?a-zA-Z0-9]/g', '');  //정규식 사용
		}
	}
}
</script>

<style>
@import "../../assets/css/common.css";

.register-container {
    margin-top: 10px;
    max-width: 30rem;
}

.register-btn {
    color: #fff !important;
    opacity: 0.6;
    background-color: #ece0fc;
}
</style>