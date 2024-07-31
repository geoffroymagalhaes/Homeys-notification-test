<template>
  <div :class="'notificationContainer'">
    <div :class="'notificationHead'">
      <div>
        <img :class="'notificationIcon'" src="../assets/icons/CheckCircle.svg" alt="checkCircle" />
        <h1 :class="'notificationTitle'">Modal Window</h1>
      </div>

      <button :class="'notificationButton'"><img src="../assets/icons/X.svg" alt="" /></button>
    </div>

    <p :class="'notificationDescription'">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
      venenatis, lectus magna fringilla urna, porttitor
    </p>
  </div>
</template>

<script></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

.notificationContainer {
  background-color: #e4f7e8;
  padding: 24px;
  border-radius: 16px;
  border: solid 2px #89b291;
  width: 527px;
  height: 160px;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.notificationHead {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.notificationHead > div {
  display: flex;
  gap: 16px;
  align-content: center;
}

.notificationTitle {
  color: #424242;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}
.notificationDescription {
  color: #757575;
  font-size: 16px;
  line-height: 24px;
  width: 431px;
  height: 72px;
  padding-left: 48px;
}
.notificationIcon {
  width: 32px;
  height: 32px;
}
.notificationButton {
  background: none;
  border: none;
  width: 20px;
  height: 20px;
}
</style>
