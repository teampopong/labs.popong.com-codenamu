<?php include "header.php" ?>


      <!-- Example row of columns -->

      <div class="row">

        <div id="panel-seats" class="span7 init-center">

           <div class="force-center">
			   <a id="btn_party" class="btnFill" data-field="party" href="#">&nbsp;</a>
			   <a id="btn_ageclass" class="btnFill" data-field="ageclass" href="#">&nbsp;</a>
			   <a id="btn_region1" class="btnFill" data-field="region1" href="#">&nbsp;</a>
			   <a id="btn_sex_estimated" class="btnFill" data-field="sex_estimate" href="#">&nbsp;</a>
			   <a id="btn_nofwins" class="btnFill" data-field="nofwins" href="#">&nbsp;</a>
           </div>
	<div style="margin-top:25px;padding-left:100px;width:1500px;"><img id="the-comment" src='' style="text-align:center;height:40px;visibility:hidden;"></div>
	<div style="padding-left:100px;width:1500px;"><img id="the-comment-fixed" src='/img/cmt_click.png' style="text-align:center;height:30px;visibility:hidden;"></div>

          <?php include "nofwins.html" ?>

        </div>


        <div class="span4" id="panel-person" style="display: none;">

          <h2 id="person-name">이름</h2>
	<div style="margin:5px 0 5px 0;">
          <img id="person-profile_image">
	</div>
          <table class="table table-condensed">
              <tbody>
                  <tr>
                      <th>생년월일</th>
                      <td>
                          <span id="person-birthyear"></span>.
                          <span id="person-birthmonth"></span>.
                          <span id="person-birthday"></span>
                      </td>
                  </tr>
                  <tr>
                      <th>소속정당</th>
                      <td id="person-party"></td>
                  </tr>
                  <tr>
                      <th>학력</th>
                      <td id="person-edu_details"></td>
                  </tr>
                  <tr>
                      <th>경력</th>
                      <td id="person-experience"></td>
                  </tr>
		  <tr>
		      <th>뉴스</th>
                      <td>
			<ul id="mashup">
			</ul>
                      </td>
		  </tr>
              </tbody>
          </table>

          <p><a class="btn" href="#">타임라인에 추가하기 &raquo;</a></p>

        </div>

<?php include "footer.php" ?>
