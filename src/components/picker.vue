<template>
  <div>
    <example-header component-name="Toast"></example-header>
    <m-form>
      <m-form-item label="选择地区" v-on:click.native="getAddressInfo">
          <p class="arrow">{{ addressNameShow}}</p>
      </m-form-item>
      <m-form-item label="性别" v-on:click.native="showGender">
          <p class="">{{gender}}</p>
      </m-form-item>
    </m-form>
    <picker :pickList="address" :pickerShow="addressShow" :reset="false" :pickerNames="addressNames" v-on:cancelFn="cancelFn" v-on:confirmFn="confirmFn" label="area" listLabel="children" :level="3"></picker>
    <picker :pickList="genderList" :pickerShow="genderShow" :pickerNames="gender" v-on:cancelFn="cancelGenderFn" v-on:confirmFn="confirmGenderFn" :level="1"></picker>
  </div>
</template>
<script type="text/javascript">
  import addressData from '@/util/addressData'
  import Form from 'lib/form/form.vue'
  import FormItem from 'lib/form/formItem.vue'
  import picker from 'lib/picker/picker.vue'
  import exampleHeader from './example-header.vue'
  export default {
    name: 'pickerIndex',
    data() {
      return {
        genderList: [
          { name: '女' }, { name: '男' }
        ],
        genderShow: false,
        addressShow: false,
        dateList: [],
        gender: '女',
        address: addressData,
        addressNames: '浙江省,温州市,洞头区'
      }
    },
    methods: {
      getAddressInfo() {
          this.addressShow = true;
        },
        confirmGenderFn(data) {
          this.gender = data.firstList;
          this.genderShow = false;
        },
        cancelGenderFn() {
          this.genderShow = false;
        },
        backPre() {
            this.$router.go(-1)
        },
        // 地址确认
        confirmFn(data) {
          let addressNames = '';
          addressNames = data.thirdList ? `${data.firstList.name},${data.secondList.name},${data.thirdList.name}` : `${data.firstList.name},${data.secondList.name}`;
          this.addressNames = addressNames;
          this.addressShow = false;
        },
        // 地址取消
        cancelFn() {
          this.addressShow = false;
        },
        showGender() {
          this.genderShow = true;
        }
    },
    components: {
        'm-form': Form,
        'm-form-item': FormItem,
        picker,
        exampleHeader
      },
    computed: {
        addressNameShow() {
          return this.addressNames.replace(/\,/g, ' ');
        },
        dateNameShow() {
          return this.dateNames.replace(/\,/g, '-');
        },
        dateName1Show() {
          return this.date1Names.replace(/\,/g, '-');
        }
      }
  }
</script>
