
function mk_addComment(replyto)
{
    replyto = typeof replyto !== 'undefined' ? parseInt(replyto) : false;
    if(replyto != false && replyto > 0)
    {
        var replyToName = jQuery('div.comment_prt div.main_comment_box.cm_' + replyto + ' div.pop_txt h4 span.username').text();
        if(replyToName != '')
        {
            jQuery('#comment_form #comment_replyto').val(replyto);
            jQuery('#mk_frm_comment span.replytoname').html(' for ' + replyToName);
        }
        else
        {
            jQuery('#comment_form #comment_replyto').val(0);
            jQuery('#mk_frm_comment span.replytoname').html('');
        }
        jQuery('html, body').animate({ scrollTop: $("#mk_frm_comment").offset().top }, 1000);
    }
    else
    {

    }
}

function mk_scrollTo(cm_id)
{
    jQuery('html, body').animate({ scrollTop: $(".main_comment_box.cm_" + cm_id).offset().top }, 1000);
}

function mk_scrollToErrors()
{
    jQuery('html, body').animate({ scrollTop: $("#mk_frm_comment ul.errors").offset().top }, 1000);
}

function mk_checkForm()
{
    var
        name = jQuery('#mk_frm_comment form#comment_form input[name="cm_username"]').val(),
        email = jQuery('#mk_frm_comment form#comment_form input[name="cm_useremail"]').val(),
        comment = jQuery('#mk_frm_comment form#comment_form textarea[name="cm_text"]').val(),
        errors = new Array();
    if(name == '') errors.push('empty name');
    if(validateEmail(email) == false) errors.push('invalid email');
    if(comment == '') errors.push('empty comment');
    if(errors.length > 0)
    {
        alert('Check fields:\n - ' + errors.join(';\n - ') + '.');
        return false;
    }
    else return true;
}

function validateEmail(email)
{
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}