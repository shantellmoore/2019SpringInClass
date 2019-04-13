<template>
    <div class="col-lg-6">
        <div class="card">
        <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="/">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Single Sign in</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">Login</h4>
        <p class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="Email">Email</label>
                  <input type="text" v-model="data.email"  
                    class="form-control" name="Email" id="Email" aria-describedby="helpEmail" placeholder="Email">
                  <small id="helpEmail" class="form-text text-muted">enter your email</small>
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input type="Password" v-model="data.password"
                  class="form-control" name="Password" id="Password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newUser">
        <div class="card-body">
          <h4 class="card-title">Congrats! you've logged in</h4>
          <p class="card-text">
            {{newUser.FirstName}}{{newUser.LastName}}
          </p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { Login } from "@/models/users";
import { Globals } from "@/models/api";
import toastr from 'toastr';



export default {
    data: () => ({
        data: {},
        newUser: null
    }),
    methods: {
        async submit(){
            try{
              const m= await Login(this.data);
              this.newUser= m.user;
              toastr.success("You've logged in successfully!")
            }catch(error){
              Globals.errors.push(error);
              toastr.error(error.msg); 
            }
        }
    }
}
</script>

<style>

</style>
