
/**  HTML JQuery Validation and Show list of errors
 *   lightweight parallax hover tilt effect for jQuery
 *   GSAP Animation
 * 
 */


$( document ).ready(function() {
    /*==================================================================
    [ Validate ]*/
    // --- Getting Html DOM Elements
    let name = $('.validate-input input[name="name"]');
    let email = $('.validate-input input[name="email"]');
    let subject = $('.validate-input input[name="subject"]');
    let message = $('.validate-input textarea[name="message"]');

    // --- Checking Html inputs Validations
    $('.validate-form').on('submit',function(){
     
        if($(name).val().trim() == ''){
            showValidate(name);
         
        }

        if($(subject).val().trim() == ''){
            showValidate(subject);
      
        }

        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
         
        }

        if($(message).val().trim() == ''){
            showValidate(message);
         
        }
    });

    // --- Clear each Html inputs error Validations
    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });
    // --- Show Validations
    function showValidate(input) {
        let $thisAlert = $(input).parent();

        $($thisAlert).addClass('alert-validate');
    }
    // --- Hide Validations
    function hideValidate(input) {
        let $thisAlert = $(input).parent();

        $($thisAlert).removeClass('alert-validate');
    }
    // ----------------------------------------------------------- //
    $('.js-tilt').tilt({
    maxTilt: 20,
      perspective: 300,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      scale: '1.5',
      speed: '400',
      transition: true,
      disableAxis: null,
      axis: null,
      reset: true,
      glare: false,
      maxGlare: 1
    });
    // ----------------------------------------------------------- //
    $("form").submit(function(e){
        e.preventDefault();
        // Snackbar.show({text: 'Example notification text.'});
        let name = $("#name").val();
        let email = $("#email").val();
        let subject = $("#subject").val();
        let message = $("#message").val();
        let URL = "https://safe-atoll-11010.herokuapp.com/send"
        let loadingMsg = "Loading"
        loadingMsg = loadingMsg.toUpperCase();

        swal({
            title: `${loadingMsg}`,
            text: 'Please wait to send your message',
            showCancelButton: false,
            showConfirmButton: false,
            icon: "warning"
          });

        $.ajax({url: URL,
        data : {
            name: name,
            email:email,
            subject:subject,
            message:message
        },
        method: "POST",
        contentType: "application/x-www-form-urlencoded",
        success : function(res,status) {
            swal(`${status}`,"You sent massage request.","success")
            .then(() => {
                swal("Thanks for sending message 😃\n Please check your Email");
              });
              $("#name").val("");
              $("#email").val("");
              $("#subject").val("");
              $("#message").val("");

        }, error: function(err,status){
            swal(`${status}`,"Invalid data try again","error", {dangerMode: true});
            $("#transfer1").html("");
        }});

      
        
      });

  // ----------------------------------------------------------- //
 
 
});