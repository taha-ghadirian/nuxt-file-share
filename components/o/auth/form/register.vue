<template>
  <!-- قبل از ریویو این بخش به بخش زیر مراجعه نمایید -->
  <!-- /docs/register.txt -->
  <M-BoxForm :submit="submitLoginForm">
    <v-row>
      <v-col cols="6">
        <M-BoxInput
          v-model="username"
          rules="required|min:5|max:100"
          label="نام کاربری*"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="email"
          rules="required|min:5|max:100|email"
          label="ایمیل*"
          type="email"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="password"
          rules="required|min:8|max:100"
          type="password"
          label="رمزعبور*"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="passwordRepeat"
          rules="required|min:8|max:100"
          type="password"
          label="تکرار رمز عبور*"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="nationalCode"
          rules="min:3|max:10"
          type="text"
          label="کد ملی"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="firstName"
          rules="required|min:3|max:30"
          type="text"
          label="نام*"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="lastName"
          rules="min:3|max:30"
          type="text"
          label="نام خانوادگی"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxSelect
          v-model="educationLevel"
          solo
          label="مقطع تحصیلی"
          :items="educationLevelItems"
          item-text="text"
          item-value="value"
        >
        </M-BoxSelect>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="job"
          rules="min:3|max:30"
          type="text"
          label="شغل"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="fatherName"
          rules="min:3|max:30"
          type="text"
          label="نام پدر"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="phonNumber"
          rules="length:11"
          type="number"
          label="شماره تلفن همراه"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="6">
        <M-BoxInput
          v-model="phonNumber"
          rules="length:10"
          type="number"
          label="شماره تلفن منزل"
          solo
        ></M-BoxInput>
      </v-col>
      <v-col cols="12">
        <M-BoxTextarea
          v-model="address"
          rules="min:10|max:100"
          type="text"
          label="آدرس محل سکونت"
          solo
        ></M-BoxTextarea>
      </v-col>
    </v-row>
    <v-btn type="submit" block color="primary"> ثبت نام </v-btn>
  </M-BoxForm>
</template>

<script>
export default {
  name: 'RegisterFormOrganism',
  data() {
    return {
      educationLevelItems: [
        { text: 'ابتدایی', value: 1 },
        { text: 'متوسطه اول', value: 2 },
        { text: 'متوسطه دوم', value: 3 },
        { text: 'دیپلوم', value: 4 },
        { text: 'لیسانس', value: 5 },
        { text: 'دکترا', value: 6 },
        { text: 'سایر', value: 0 },
      ],
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      nationalCode: '',
      firstName: '',
      lastName: '',
      fatherName: '',
      educationLevel: null,
      job: '',
      phonNumber: '',
      address: '',
    }
  },
  methods: {
    submitRegisterForm() {
      alert('registerd')
    },
  },
}
</script>

<style></style>
