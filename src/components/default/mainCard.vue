<template>
    <v-container
        class="justify-center text-center main-container"
    >
            <div
                class="d-inline-block main-card-form main-card-line-1 justify-center text-center margin-0-auto"
            >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="0"
                >
                    <v-card
                        class="mx-auto justify-center main-card"
                        outlined
                        :elevation="hover ? 16 : 2"
                    > 
                            <v-card-title>
                                <div style="width: 100%;">
                                    <v-icon
                                        medium
                                        left
                                    >
                                        mdi-earth
                                    </v-icon>
                                    <span class="font-weight-bold">전국 프리마켓 현황</span>
                                </div>
                                
                                <div style="width: 100%;">
                                    <span class="font-weight-light caption">2022.06.09 ~ 2022.07.01</span>
                                </div>
                        </v-card-title>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row>
                                <div class="main-card-text-form font-weight-bold">
                                    <span class>총 </span>
                                    <span class="font-weight-bold main-card-font-accent">11건</span>
                                </div>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </div>
            
            <div
                class="d-inline-block main-card-form main-card-line-2 justify-center text-center margin-0-auto"
            >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="0"
                >
                    <v-card
                        class="mx-auto justify-center main-card"
                        outlined
                        :elevation="hover ? 16 : 2"
                    > 
                        <v-card-title>
                                <div style="width: 100%;">
                                    <v-icon
                                        medium
                                        left
                                    >
                                        mdi-crosshairs-gps
                                    </v-icon>
                                    <span class="font-weight-bold">광주광역시 프리마켓 현황</span>
                                </div>
                                
                                <div style="width: 100%;">
                                    <span class="font-weight-light caption">2022.06.09 ~ 2022.07.01</span>
                                </div>
                        </v-card-title>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row>
                                <div class="main-card-text-form font-weight-bold">
                                    <span class>총 </span>
                                    <span class="main-card-font-accent">11건</span>
                                </div>
                            </v-row>
                        </v-card-text>

                    </v-card>
                </v-hover>
            </div>

            <div
                class="d-inline-block main-card-form main-card-line-2 justify-center text-center margin-0-auto"
            >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="0"
                >
                    <v-card
                        class="mx-auto justify-center main-card"
                        outlined
                        :elevation="hover ? 16 : 2"
                    > 
                        <v-card-title>
                                <div style="width: 100%;">
                                    <v-icon
                                        medium
                                        left
                                    >
                                        mdi-account-group
                                    </v-icon>
                                    <span class="font-weight-bold">오플리에서 프리마켓 오픈</span>
                                </div>
                                
                                <div style="width: 100%;">
                                    <span class="font-weight-light caption">편-하게 입점 관리까지 ! </span>
                                </div>
                        </v-card-title>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row>
                                <div class="main-card-text-form font-weight-bold">
                                    <span class></span>
                                    <span class="main-card-font-accent">-</span>
                                </div>
                            </v-row>
                        </v-card-text>

                    </v-card>
                </v-hover>
            </div>

            <div
                class="d-inline-block main-card-form main-card-line-2 justify-center text-center margin-0-auto"
            >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="0"
                >
                    <v-card
                        class="mx-auto justify-center main-card"
                        outlined
                        :elevation="hover ? 16 : 2"
                    > 
                        <v-card-title>
                                <div style="width: 100%;">
                                    <v-icon
                                        medium
                                        left
                                    >
                                        mdi-store-plus
                                    </v-icon>
                                    <span class="font-weight-bold">오플리에서 신청한 입점</span>
                                </div>
                                
                                <div style="width: 100%;">
                                    <span class="font-weight-light caption">간단한 신청절차 - 입점까지 !</span>
                                </div>
                        </v-card-title>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row>
                                <div class="main-card-text-form font-weight-bold">
                                    <span class>총 </span>
                                    <span class="main-card-font-accent">11건</span>
                                </div>
                            </v-row>
                        </v-card-text>

                    </v-card>
                </v-hover>
            </div>
    </v-container>
</template>

<style lang="scss">
.main-container {
    margin-top: 10px;
    max-width: 60rem;
}

.main-card-form {
    height: auto;
    padding: 0.5rem 1.1rem;
    width: 22.5rem;
    max-width:22.5rem;
}

.main-card {
    height: auto;
    padding: 0.5rem;
    border-radius: 12px !important;
    border: 0.0625rem solid #ccc !important;
    cursor: pointer;

    span {
        font-size: 14px;
    }
}

.main-card-text-form {
    text-align: right;
    width: 95%;
    margin-top: 8px;
    color: black;
}

.main-card-font-accent {
    font-size: 16px;
    color: #606fe4;
}
</style>