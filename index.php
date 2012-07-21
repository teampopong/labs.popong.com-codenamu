<?php include "header.php" ?>


      <!-- Example row of columns -->

      <div class="row">

        <div id="panel-seats" class="span7 init-center">

          <h2>국회 좌석별 국회의원</h2>

           <p>아래는 18대국회 국회의원 좌석입니다</p>
           <p>정보를 보고싶은 국회의원을 선택해주세요</p>

           <p>
           <a class="btn btnFill" data-field="party" href="#">정당별 &raquo;</a>
           <a class="btn btnFill" data-field="ageclass" href="#">연령별 &raquo;</a>
           <a class="btn btnFill" data-field="region1" href="#">지역별 &raquo;</a>
           <a class="btn btnFill" data-field="sex_estimate" href="#">성별 &raquo;</a>
           <a class="btn btnFill" data-field="nofwins" href="#">몇선별 &raquo;</a>
           </p>

          <?php include "nofwins.html" ?>

        </div>


        <div class="span5" id="panel-person" style="display: none;">

          <h2 id="person-name">이름</h2>
          <img id="person-profile_image">
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
              </tbody>
          </table>

          <p><a class="btn" href="#">타임라인에 추가하기 &raquo;</a></p>

        </div>

<?php include "footer.php" ?>
