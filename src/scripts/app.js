import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const ProfileList = React.createClass({

  render: function(){
    let congressProfile = this.props.obj.map(function(congressObj){
    return <SingleProfile obj={congressObj}/>
    })
    return (
      <div className = 'congressProfileList'>
        {congressProfile}
      </div>
    )
  }
})

const SingleProfile = React.createClass({
      _createSingleJSX: function(obj){
        return (
              <div className='congressProfileThumbnail'>
                <h2>{this.props.obj.first_name} {this.props.obj.last_name}</h2>
                <h2>{this.props.obj.title} --{this.props.obj.party}-{this.props.obj.state_name}</h2>
                <ul>
                  <li>Email: {this.props.obj.oc_email}</li>
                  <li>Website: {this.props.obj.website}</li>
                  <li>Facebook: {this.props.obj.facebook_id}</li>
                  <li>Twitter: {this.props.obj.twitter_id}</li>
                </ul>
                <p>Term end: {this.props.obj.term_end}</p>
              </div>
              )
          },
  render: function(){
    console.log(this.props.obj)
    let legislatorList = this.props.obj
    return (this._createSingleJSX(legislatorList))
    }
  })

$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
  ReactDOM.render( <ProfileList obj={serverRes.results}/> , document.querySelector('#app-container'));
})
