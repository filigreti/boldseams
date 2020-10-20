<template>
  <main>
    <div class="home">
      <div class="gradient">
        <div class="footer">
          <img src="@/assets/footerImage.svg" alt="" />
        </div>
      </div>
      <div class="home-container">
        <div class="home-top">
          <nav class="breadcrumb">
            <a href="#"><div class="low">Settings</div></a>
            <a id="last" href="#4">User and Business Profiles</a>
          </nav>
          <div>
            <img class="warning" src="@/assets/warning.svg" alt="" />
          </div>
        </div>
        <div class="home-header">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="" />
            <img class="camera" src="@/assets/camera.svg" alt="" />
          </div>
          <div class="header-name">Boldseams Couture</div>
        </div>
        <div class="home-body">
          <div class="profile">
            <div class="profile-top">
              <div class="profile-top-title">My Profile</div>
              <div class="config">
                <a
                  @click.prevent="editPassword = true"
                  class="password-change"
                  href=""
                  >Change Password</a
                >
                <a @click.prevent="editModal = true" href="">Edit</a>
              </div>
            </div>
            <div class="input-area">
              <div class="input-box">
                <div class="input-title">Name</div>
                <div class="input-content">
                  {{ profile.firstName }} {{ profile.lastName }}
                </div>
              </div>
              <div class="input-box">
                <div class="input-title">Email</div>
                <div class="input-content">{{ profile.email }}</div>
              </div>
              <div class="input-box">
                <div class="input-title">Phone Number</div>
                <div class="input-content">{{ profile.phoneNumber }}</div>
              </div>
            </div>
          </div>
          <div class="profile space-top">
            <div class="profile-top">
              <div class="profile-top-title">Businesses</div>
              <div @click="newCompanyModal = true" class="config">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21.3457C17.5228 21.3457 22 17.0017 22 11.6431C22 6.28452 17.5228 1.94052 12 1.94052C6.47715 1.94052 2 6.28452 2 11.6431C2 17.0017 6.47715 21.3457 12 21.3457Z"
                    fill="#0CA2D9"
                  />
                  <path
                    d="M12 7.76207V15.5241"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 11.6431H16"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="business">Add Business</div>
              </div>
            </div>
            <div class="input-area">
              <div
                v-for="(company, index) in companies"
                @click="(editable = company), (companyEdit = true)"
                :key="index"
                class="input-box-two"
              >
                <div class="business m-0">{{ company.name }}</div>
                <div class="input-num">{{ company.industry }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal @close="editModal = false" v-if="editModal">
      <template v-slot:header>
        <div>Edit Profile Details</div>
      </template>
      <div class="top-container">
        <Input
          placeholder="First Name"
          v-model="profile.firstName"
          class="bottom-space"
          :disabled="once"
        />
        <Input
          placeholder="Last Name"
          v-model="profile.lastName"
          class="bottom-space"
          :disabled="once"
        />
        <Input
          placeholder="Email"
          v-model="profile.email"
          type="email"
          class="bottom-space"
          :disabled="once"
        />
        <Input
          placeholder="Phone Number"
          v-model="profile.phoneNumber"
          class="bottom-space"
          :disabled="once"
        />
        <div class="button-area">
          <button v-if="!once" @click="close">Save</button>
          <div class="security" v-else>
            For security purposes, you can only edit your profile once a day
          </div>
        </div>
      </div>
    </modal>
    <modal @close="editPassword = false" v-if="editPassword">
      <template v-slot:header>
        <div>Edit Profile Details</div>
      </template>
      <div class="top-container">
        <Input
          placeholder="Old Password"
          type="password"
          class="bottom-space"
          :disabled="oncePassword"
        />
        <Input
          placeholder="New Password"
          type="password"
          class="bottom-space"
          :disabled="oncePassword"
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          class="bottom-space"
          :disabled="oncePassword"
        />

        <div class="button-area">
          <button v-if="!oncePassword" @click="closeTwo">Save</button>
          <div class="security" v-else>
            For security purposes, you can only edit your profile once a day
          </div>
        </div>
      </div>
    </modal>
    <modal @close="companyEdit = false" v-if="companyEdit">
      <template v-slot:header>
        <div>Business Details - {{ editable.name }}</div>
      </template>
      <div class="flex">
        <div class="home-header">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="" />
            <img class="camera" src="@/assets/camera.svg" alt="" />
          </div>
          <div class="header-name">Boldseams Couture</div>
        </div>
        <div class="w-full">
          <Input
            placeholder="Business Name"
            v-model="editable.name"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
        </div>
        <div class="top-container grid">
          <Input
            placeholder="Phone Number"
            v-model="editable.phone"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
          <Input
            placeholder="Business Type"
            v-model="editable.businessType"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
          <Input
            placeholder="Email"
            v-model="editable.email"
            type="email"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
          <Input
            placeholder="Industry"
            v-model="editable.industry"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
          <Input
            placeholder="Country"
            v-model="editable.country"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
          <Input
            placeholder="Rc-Number"
            v-model="editable.rcNumber"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
          <Input
            placeholder="State"
            v-model="editable.state"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
          <Input
            placeholder="Local Councel"
            v-model="editable.local"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
        </div>
        <div style="margin-top: 0" class="w-full">
          <Input
            placeholder="Address"
            v-model="editable.address"
            class="bottom-space"
            :disabled="editCompanyDetails"
          />
        </div>
        <div class="button-area">
          <button
            @click="
              editCompanyDetails
                ? (editCompanyDetails = false)
                : ((companyEdit = false), (editCompanyDetails = true))
            "
          >
            {{ editCompanyDetails ? "Edit" : "Save" }}
          </button>
        </div>
      </div>
    </modal>
    <modal @close="newCompanyModal = false" v-if="newCompanyModal">
      <template v-slot:header>
        <div>Add Business</div>
      </template>
      <div class="flex">
        <div class="home-header">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="" />
            <img class="camera" src="@/assets/camera.svg" alt="" />
          </div>
          <div class="header-name">Boldseams Couture</div>
        </div>
        <div class="w-full">
          <Input
            placeholder="Business Name"
            v-model="newCompany.name"
            class="bottom-space"
          />
        </div>
        <div class="top-container grid">
          <Input
            placeholder="Phone Number"
            v-model="newCompany.phone"
            class="bottom-space"
          />
          <Input
            placeholder="Business Type"
            v-model="newCompany.businessType"
            class="bottom-space"
          />
          <Input
            placeholder="Email"
            v-model="newCompany.email"
            type="email"
            class="bottom-space"
          />
          <Input
            placeholder="Industry"
            v-model="newCompany.industry"
            class="bottom-space"
          />
          <Input
            placeholder="Country"
            v-model="newCompany.country"
            class="bottom-space"
          />
          <Input
            placeholder="Rc-Number"
            v-model="newCompany.rcNumber"
            class="bottom-space"
          />
          <Input
            placeholder="State"
            v-model="newCompany.state"
            class="bottom-space"
          />
          <Input
            placeholder="Local Councel"
            v-model="newCompany.local"
            class="bottom-space"
          />
        </div>
        <div style="margin-top: 0" class="w-full">
          <Input
            placeholder="Address"
            v-model="newCompany.address"
            class="bottom-space"
          />
        </div>
        <div class="button-area">
          <button
            @click="
              companies.push(newCompany), (newCompanyModal = false), setAll
            "
          >
            Save
          </button>
        </div>
      </div>
    </modal>
  </main>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        firstName: 'Fariq',
        lastName: 'Abdulahi Umar',
        email: 'fariq.umar@gmail.com',
        phoneNumber: '08012345678'
      },
      newCompany: {
        name: null,
        phone: null,
        businessType: null,
        email: null,
        industry: null,
        country: null,
        rcNumber: null,
        state: null,
        local: null,
        address: null
      },
      newCompanyModal: false,
      once: false,
      oncePassword: false,
      editModal: false,
      editPassword: false,
      editable: null,
      companyEdit: false,
      editCompanyDetails: true,
      companies: [
        {
          name: 'BoldSeams',
          phone: '0909010101011',
          businessType: 'Sole Proprietorship',
          email: 'b.stitches@gmail.com',
          industry: 'Fashion Design',
          country: "Nigeria",
          rcNumber: 'FS-906374',
          state: 'Lagos',
          local: 'Ijaye',
          address: '5 Abiola Way, Ikeja'
        },
        {
          name: 'East-West Farmers',
          phone: '0909010101011',
          businessType: 'Sole Proprietorship',
          email: 'west-farmers@gmail.com',
          industry: 'Poultry and Beef COmpany',
          country: "Nigeria",
          rcNumber: 'FS-9001010',
          state: 'Lagos',
          local: 'Gbagada',
          address: '10 soluyi, Gbagada'
        },
        {
          name: 'Mizzle Pharmaceuticals',
          phone: '0909010101011',
          businessType: 'Sole Proprietorship',
          email: 'west-farmers@gmail.com',
          industry: 'Pharmaceutical drugs and Products',
          country: "Nigeria",
          rcNumber: 'FS-9001010',
          state: 'Lagos',
          local: 'Gbagada',
          address: '10 soluyi, Gbagada'
        }
      ]


    }
  },
  // computed: {
  //   runOncePerDay() {
  //     if (!this.hasOneDayPassed()) return false;
  //   }
  // },

  methods: {
    close() {
      this.once = true
      this.editModal = false
    },
    closeTwo() {
      this.oncePassword = true
      this.editPassword = false
    },
    setAll() {
      this.newCompany.name = null
    }


  }
}
</script>

<style>
.home {
  display: flex;
  width: 100%;
  background: #fafafa;
}
.home-container {
  width: 100%;
}
.gradient {
  height: calc(100vh - 3.5rem);
  background: linear-gradient(180deg, #0ca2d9 22.4%, #0077a3 83.85%);
  box-shadow: 0px 0px 0px rgba(63, 63, 68, 0.05),
    0px 1px 3px rgba(63, 63, 68, 0.15);
  width: 10rem;
  position: relative;
}
.footer {
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 0px 0px rgba(63, 63, 68, 0.05),
    0px 1px 3px rgba(63, 63, 68, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.breadcrumb {
  background: #f4f4f4;
  display: inline-block;
  padding: 1px;
  padding-right: 18px;
  text-align: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.breadcrumb a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 0.4rem 3.5rem;
  position: relative;
  text-decoration: none;
  -webkit-clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 50%,
    calc(100% - 15px) 100%,
    0 100%,
    15px 50%
  );
  clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 50%,
    calc(100% - 15px) 100%,
    0 100%,
    15px 50%
  );
  margin-right: -17px;
  color: #7c7c7c;
  font-size: 0.85rem;
}
.breadcrumb a#last {
  -webkit-clip-path: polygon(
    0 0,
    calc(100% - 0px) 0,
    100% 50%,
    calc(100% - 0px) 100%,
    0 100%,
    15px 50%
  );
  clip-path: polygon(
    0 0,
    calc(100% - 0px) 0,
    100% 50%,
    calc(100% - 0px) 100%,
    0 100%,
    15px 50%
  );
  background: #eeeeee;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.breadcrumb a:first-child {
  -webkit-clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 50%,
    calc(100% - 15px) 100%,
    0 100%
  );
  clip-path: polygon(
    0 0,
    calc(100% - 15px) 0,
    100% 50%,
    calc(100% - 15px) 100%,
    0 100%
  );
}
.low {
  opacity: 0.8;
}
.home-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.warning {
  height: 1.3rem;
  width: 1.3rem;
}
.home-header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  flex-direction: column;
}
.logo {
  position: relative;
}
.camera {
  position: absolute;
  bottom: 3px;
  right: -4px;
}
.header-name {
  font-size: 0.9rem;
  color: #0979a2;
  margin-top: 1rem;
}
.home-body {
  margin-top: 2rem;
  padding-left: 1rem;
}
.profile {
  background: #ffffff;
  border: 1px solid rgba(124, 124, 124, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem 2rem 1.5rem 4rem;
}
.profile-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.config {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.w-full {
  display: flex;
  width: 100%;
}
.w-full input {
  width: 36rem;
  margin-top: 1.5rem;
}
.config a {
  color: #0ca2d9;
  font-size: 0.85rem;
}

.profile-top-title {
  font-size: 0.9rem;
  color: #7c7c7c;
}
.password-change {
  margin-right: 1.5rem;
}
.input-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  margin-top: 1rem;
  row-gap: 1rem;
}
.input-box {
  border-bottom: 1px solid #eaeaea;
}
.input-title {
  color: #7c7c7c;
  font-size: 0.85rem;
  padding-bottom: 0.3rem;
}
.input-content {
  color: #333333;
  padding-bottom: 0.2rem;
  font-size: 0.85rem;
  letter-spacing: 0.3px;
}
.space-top {
  margin-top: 2rem;
}
.business {
  font-size: 0.85rem;
  margin-left: 0.5rem;
  color: #0ca2d9;
}
.input-box-two {
  border: 0.5px solid rgba(124, 124, 124, 0.21);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.7rem 1rem;
}
.m-0 {
  margin: 0 !important;
}
.input-num {
  text-transform: capitalize;
  font-size: 0.85rem;
  color: #7c7c7c;
  margin-top: 0.5rem;
}
.top-container {
  margin-top: 1rem;
  width: 100%;
}
.top-container input {
  width: 90%;
}
.bottom-space {
  margin-bottom: 1rem;
}
.button-area {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.button-area button {
  background: #0ca2d9;
  border-radius: 4px;
  color: white;
  padding: 0.8rem 3rem;
  border: none;
  font-family: "Lato";
}
.security {
  font-size: 0.85rem;
}
.grid {
  display: grid;
  width: 95%;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  row-gap: 0.5rem;
}
.flex {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
