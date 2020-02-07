
show_collapse_model_and_hide();
function show_collapse_model_and_hide(){
    let friends_collapse = document.querySelector('.friends_collapse'); 
    let notification_collapse = document.querySelector('.collapse_notification');
    let notification_link = document.querySelectorAll('.notification_link'); //this will grab all notification

    notification_link.forEach(element=>{
        element.addEventListener('click',function(event){
            event.preventDefault();
            if(event.target.parentElement.parentElement.classList.contains('notification_link'))
            {
                if(event.target.parentElement.parentElement.id == 'friends_request'){
                    if(friends_collapse.classList.contains('show')){
                        friends_collapse.classList.remove('show');
                    }
                    else if(!friends_collapse.classList.contains('show')){
                        friends_collapse.classList.add('show');
                    }
                    notification_collapse.classList.remove('show');
                }
                else if(event.target.parentElement.parentElement.id == 'notification')
                {
                    if(notification_collapse.classList.contains('show')){
                        notification_collapse.classList.remove('show');
                    }
                    else if(!notification_collapse.classList.contains('show')){
                        notification_collapse.classList.add('show');
                    }
                    friends_collapse.classList.remove('show');
                }
            }
           
            //friends_request;
        })
    });
}


post_model_show_and_hide();
function post_model_show_and_hide()
{
    if(document.getElementById('postContent')){
        let content = document.getElementById('postContent');
        content.addEventListener('click',function(){
            $("#PostFormModal").modal('show');
        });
    }
  
  
}

// profile page  js 
addUnderlineInProfileNav()
function addUnderlineInProfileNav()
{
    let li_nav = document.querySelectorAll('.profile_nav ul li');
    let div = document.createElement('div');
    div.classList.add('underline');
    li_nav.forEach((ele)=>{
        ele.addEventListener('mouseover',function(event){
               this.appendChild(div);
        });
        ele.addEventListener('mouseout',function(event){
           
            if(this.lastElementChild && this.lastElementChild.classList.contains('underline'))
            {
                this.removeChild(this.lastElementChild);
            }
        });
        
    });
}

profileTabNavShow();
function profileTabNavShow()
{
    let li       = document.querySelectorAll('.nav_item_profile');
    console.log(li);
    let timeline = document.getElementById('timeline');
    let friends  = document.getElementById('friends');
    let photos   = document.getElementById('photos');
    let videos   = document.getElementById('videos');
    
    li.forEach(ele=>{
        ele.addEventListener('click',function(event){
               value = this.dataset.value;
                
               if(timeline.id == value)
               {
                    timeline.style.display="block";
                    friends.style.display="none";
                    photos.style.display="none";
                    videos.style.display="none";
               }
               else if(friends.id == value)
               {
                    friends.style.display="block";
                    timeline.style.display="none";
                    photos.style.display="none";
                    videos.style.display="none";
               }
               else if(photos.id == value)
               {
                    photos.style.display="block";
                    timeline.style.display="none";
                    friends.style.display="none";
                    videos.style.display="none";
               }
               else if(videos.id == value)
               {
                    videos.style.display="block";
                    timeline.style.display="none";
                    friends.style.display="none";
                    photos.style.display="none";
                   
               }
        });
    });

}
