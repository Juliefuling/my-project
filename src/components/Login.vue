<template>
	<div class="login">
		<section id="wrapper">
			<div class="login-register">
				<div class="bg-box" v-bind:style="bgBoxStyleObject">
					<div class="bg-box-content">
						协会云管理系统
					</div>
				</div>
				<div class="login-box-info" v-bind:style="lgBgBoxStyleObject">
					<div class="card">
						<form class="form-horizontal form-material" id="loginform">
							<div class="form-group" id="loginValidate" style="display:none;">
								<div class="col-xs-12">
									<div class="alert alert-danger" id="loginValidatealert" style="padding:6px;">
										<i class="fa fa-exclamation-triangle" style="margin-right:20px;"></i><span id="loginValidateMessageText">请输入用户名！</span>
									</div>
								</div>
							</div>
							<div class="form-group " style="">
								<div class="col-xs-12">
									<div class="input-group">
										<div class="input-group-addon">
											账号
										</div>
										<input v-model="UserAccount"  class="form-control" style="" type="text" value="" placeholder="账号">
									</div>
								</div>
							</div>
							<div class="form-group" style="">
								<div class="col-xs-12">
									<div class="input-group">
										<div class="input-group-addon input-group-addon-define">
											密码
										</div>
										<input v-model="UserPwd" @keyup.enter="loginSubmit" class="form-control" type="password" value="" style="" placeholder="密码">
									</div>
								</div>
							</div>
							<div class="form-group text-center m-t-20">
								<div class="col-xs-12">
									<button id="btnLogin" class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="button">登 录</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	name: 'login',
	data () {
		return {
			UserAccount:"",
			UserPwd:"",
			screenWidth:document.body.clientWidth,
			lgBgBoxStyleObject:{
				display:'block',
				width:'630px'
			},
			bgBoxStyleObject:{
				display:'block',
				width:(document.body.clientWidth-630)+'px'
			}
		}
	},
	mounted () {
		const that=this
		window.onresize=()=>{
			return(()=>{
				window.screenWidth=document.body.clientWidth
				that.screenWidth=window.screenWidth
				if(that.screenWidth<=768){
					that.lgBgBoxStyleObject={display:'block',width:'100%'}
					that.bgBoxStyleObject={display:'none',width:'0px'}

				}else{
					that.lgBgBoxStyleObject={display:'block',width:'630px'}
					that.bgBoxStyleObject={display:'block',width:(that.screenWidth-630-5)+'px'}
				}

			})()
		},
		loginSubmit()=>{
			
		}

	},
	watch:{
		screenWidth(val){
			this.screenWidth=val
		},
		bgBoxStyleObject(val){
			this.bgBoxStyleObject=val
		}
	}	
}
</script>
<style scoped>
.login-register {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	height: 100%;
	width: 100%;
	padding: 0;
	position: fixed;
}
.bg-box,.login-box-info{
	float: left;
}
.bg-box{
	width: 54.9%;
	height: 100%;
	border-right: 1px dotted #dddddd;
	position: relative;
}
.bg-box-content{
	position: absolute;
	text-align: center;
	margin: 0 auto;
	width: 500px;
	height: 80px;
	top: 50%;
	left: 50%;
	margin-left: -250px;
	font-size: 36px;
	margin-top: -40px;
	letter-spacing: 2px;
}
.login-box-info{
	width: 45%;
	height: 100%;
	position:relative;
}
.card{
	padding: 10px 15%;
	margin: 0 auto;
	height: 300px;
	position: absolute;
	top: 50%;
	margin-top: -150px;
}
.login-box-info .form-control{
	height: 45px;
}
.card .form-group:not(first-child){
	margin-bottom: 20px;
}
.card .form-group:last-child{
	margin-top: 40px;
}
#loginValidate{
	margin-bottom: -20px;
	font-size: 14px;
}
</style>