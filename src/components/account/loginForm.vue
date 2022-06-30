<template>
    <v-container class="justify-center text-center main-container login-container">
        <div class="justify-center text-center margin-0-auto">
            <v-col>
                <span class="text-h4 font-weight-bold">로그인</span>
            </v-col>
            <v-col>
                <button @click="kakaoLogin()"><img src="@/assets/images/kakao_login_medium_wide.png"/></button>
            </v-col>
        </div>

        <div class="justify-center text-center margin-0-auto login-sub-text">
            <v-col class="font-weight-light">
                <span>＊ 카카오 계정으로 간편하고 안전하게 로그인(회원가입)할 수 있습니다.</span>
            </v-col>
            <v-col class="font-weight-light">
                <span>＊ 제공항목에 "전체 동의하기"를 체크해주세요.</span>
            </v-col>
            <v-col style="padding: 0px;">
                <span class="font-weight-light">＊ 카카오 계정이 기억나지 않으시나요? </span>
                <span class="text-decoration-underline">
                    <a style="color: #5f5f5f" target="_blank" href="https://accounts.kakao.com/weblogin/find_password?continue=https://accounts.kakao.com/weblogin/account/info">확인방법</a>    
                </span>
            </v-col>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            client_id: ""
        }
    },
    mounted() {
        // kakao init
        window.Kakao.init(this.client_id)
    },
    methods: {
        kakaoLogin() {
             // javascript Key
            if (window.Kakao.Auth.getAccessToken()) {
                window.Kakao.API.request({
                    url: '/v1/user/unlink',
                    success: function (response) {
                        console.log("accessToken Success")
                        console.log(response)
                    },
                    fail: function (error) {
                        console.log("accessToken Error")
                        console.log(error)
                    },
                })
                window.Kakao.Auth.setAccessToken(undefined)
            }

            // 카카오 로그인
            window.Kakao.Auth.login({
                scope: 'account_email', // 이메일 정보 동의 표시
                success: function () {
                    Kakao.API.request({ // 이메일 정보 동의 체크
                        url: '/v2/user/scopes',
                        data: {
                            scopes: ["account_email"]
                        },
                        success: function(response) {
                            console.log(response);

                            // 이메일 동의 체크 안했을 경우
                            if (!response.scopes[0].agreed) {
                                alert("제공항목에 Email 동의에 체크해주시기 바랍니다.");
                                location.reload();
                            } else {
                                // 이메일 동의 체크
                                window.Kakao.API.request({
                                    url: '/v2/user/me',
                                    data: {
                                        property_keys: ["kakao_account.email"]
                                    },
                                    success: async function (response) {
                                        console.log("login Success");
                                        console.log(response);
                                        console.log(response.kakao_account.email);

                                        // 1. DB Check
                                            // 1-1. DB에 email이 존재할 경우 jwt token 값 저장
                                                // 저장 후 main 페이지로 이동
                                            // 1-2. DB에 email이 없을 경우 registerForm으로 이동
                                    },
                                    fail: function (error) {
                                        console.log("login Error");
                                        console.log(error);
                                    },
                                })
                            }
                        },
                        fail: function(error) {
                            console.log(error);                     
                        }
                    });
                },
                fail: function (error) {
                    console.log(error);   

                    if (error.error == "invalid_grant") {
                        // alert("세션이 만료되었습니다.\n 다시 로그인해주시기 바랍니다.");
                        // location.reload();
                    }                 
                }
            })
        },

        /*
        kokoaLogout() {
            Kakao.Auth.logout(function() {
                console.log(Kakao.Auth.getAccessToken());
            });
        }
        */
    },
    computed: {
        /*
        kakaoLoginLink() {
            return `https://kauth.kakao.com/oauth/authorize?client_id=${this.client_id}&redirect_uri=${this.redirect_uri}&response_type=code`;
        }
        */
    }
}
  
</script>

<style>
@import "../../assets/css/common.css";

.login-container {
    margin-top: 30px;
}

</style>