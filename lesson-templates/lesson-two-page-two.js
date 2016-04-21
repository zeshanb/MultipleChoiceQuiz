/* Programmed by: Zeshan Bilal
   Date: June 28 2014
*/

function LessonTwoPageTwo($scope,$http){
    
    if(QuizData){ QuizData = null;}
    
   var score = 0;
    var displayscore = document.getElementById('ScoreTwo');
    var needed = 40; 
    var displayneeded = document.getElementById('NeededTwo');
    displayneeded.innerHTML = "Score Needed: 40";
    var VerifyAnswer = new Array();
    var ForScore;
    var audio = document.getElementById('AudioPlayerTwo');
    var whattochoose;
        
       function AnswerChoices(Question){
           
           whattochoose = Math.floor(0 + (1+2-0)*Math.random());
            
            choices[0] = Math.floor(0 + (1+13-0)*Math.random());
            choices[1] = Math.floor(14 + (1+26-14)*Math.random());
            choices[2] = Math.floor(27 + (1+39-27)*Math.random());

        }

          
         function NextQuestion() {
        
                   //pickQuestion();
                     AnswerChoices();
             
                    CorrectAnswer = "../image/Lesson2Pg2/"+QuizData["d"+ choices[whattochoose] +""].en +"";
                    ForScore = "../image/Lesson2Pg2/"+QuizData["d"+ choices[whattochoose]  +""].img +"";
                    $scope.Question = "sound/lesson2pg2/aac/"+QuizData["d"+  choices[whattochoose]   +""].sound +"";
                    $scope.Questionogg = "sound/lesson2pg2/ogg/"+QuizData["d"+  choices[whattochoose]   +""].soundogg +"";
                   //$scope.Question = "sound/"+QuizData["c"+ QuestionNum +""].sound +""; 
                      $scope.choiceA = "../image/Lesson2Pg2/"+QuizData["d"+ choices[0] +""].img +"";
                      $scope.choiceAen = "../image/Lesson2Pg2/"+QuizData["d"+ choices[0] +""].en +"";
                      $scope.choiceB = "../image/Lesson2Pg2/"+QuizData["d"+ choices[1] +""].img +"";
                      $scope.choiceBen = "../image/Lesson2Pg2/"+QuizData["d"+ choices[1] +""].en +"";
                      $scope.choiceC = "../image/Lesson2Pg2/"+QuizData["d"+ choices[2] +""].img +"";
                      $scope.choiceCen = "../image/Lesson2Pg2/"+QuizData["d"+ choices[2] +""].en +"";
                  
                   if(audio.canPlayType('audio/mpeg')){
                         
                         audio.src = $scope.Question;
                       } 
                      
                      if(audio.canPlayType('audio/ogg')){
                         
                         audio.src = $scope.Questionogg;
                         }
                      
                       
                          audio.play();
        
              }
        
            $http.get('../json-data/lesson2-page2.json')
                  .success(function(datatwo,status,headers,config){
                              
                      QuizData = datatwo;
                       
                      AnswerChoices();
                      //pickQuestion();
                      
                   CorrectAnswer = "../image/Lesson2Pg2/"+QuizData["d"+ choices[whattochoose]  +""].en +"";
                   ForScore = "../image/Lesson2Pg2/"+QuizData["d"+ choices[whattochoose]  +""].img +"";
                     $scope.Question = "sound/lesson2pg2/aac/"+QuizData["d"+  choices[whattochoose]   +""].sound +"";
                    $scope.Questionogg = "sound/lesson2pg2/ogg/"+QuizData["d"+  choices[whattochoose]   +""].soundogg +"";
                   //$scope.Question = "sound/"+QuizData["c"+ QuestionNum +""].sound +""; 
                      $scope.choiceA = "../image/Lesson2Pg2/"+QuizData["d"+ choices[0] +""].img +"";
                      $scope.choiceAen = "../image/Lesson2Pg2/"+QuizData["d"+ choices[0] +""].en +"";
                      $scope.choiceB = "../image/Lesson2Pg2/"+QuizData["d"+ choices[1] +""].img +"";
                      $scope.choiceBen = "../image/Lesson2Pg2/"+QuizData["d"+ choices[1] +""].en +"";
                      $scope.choiceC = "../image/Lesson2Pg2/"+QuizData["d"+ choices[2] +""].img +"";
                      $scope.choiceCen = "../image/Lesson2Pg2/"+QuizData["d"+ choices[2] +""].en +"";
                      
                      
                     if(audio.canPlayType('audio/mpeg')){
                         
                         audio.src = $scope.Question;
                       } 
                      
                      if(audio.canPlayType('audio/ogg')){
                         
                         audio.src = $scope.Questionogg;
                         }
                      
                       
                          audio.play();
                      
                      
                      console.log('success',status)
                      console.log(QuizData)
                  
                  })
                  .error(function(data,status,headers, config){
                     
                      console.log('error!', status)
                      console.log(QuizData)
                  })
            
          
            
            
            $scope.$on('ChoseA', function(){
                
                var ChoiceIs = ""+ $scope.choiceA +"";
                
                 

                console.log($scope.choiceA);
                  
                    if ($scope.choiceAen === CorrectAnswer){
                      
                       console.log("yes they match"); 
                        
                        if(!VerifyAnswer[""+ChoiceIs+""]){
                            
                            VerifyAnswer[""+ChoiceIs+""] = ""+ForScore+"";
                            score += 1;
                            displayscore.innerHTML = "Score: "+score+"";
                             
                        }
                      
                           //sound.play();
                        audio.src = undefined;
                       
                        
                        NextQuestion();
                    
                    } else {
                      
                        console.log("correct answer is", CorrectAnswer);
                        
                    }  
              });
        
        
               $scope.$on('ChoseB', function(){

                console.log($scope.choice2B);
                   
                   var ChoiceIs = ""+ $scope.choiceB +"";
                   
                   
                    if ($scope.choiceBen === CorrectAnswer){
                      
                       console.log("yes they match"); 
                        
                        if(!VerifyAnswer[""+ChoiceIs+""]){
                            
                            VerifyAnswer[""+ChoiceIs+""] = ""+ForScore+"";
                            score += 1;
                            displayscore.innerHTML = "Score: "+score+"";
                             
                        }
                        
                        //sound.play();
                        //audio.src = undefined;
                        
                        NextQuestion();
                    
                    } else {
                      
                        console.log("correct answer is", CorrectAnswer);
                        
                    }  
              });
        
        
               $scope.$on('ChoseC', function(){

                console.log($scope.choiceC);
                   
                   var ChoiceIs = $scope.choiceC;
                  
                    if ($scope.choiceCen === CorrectAnswer){
                      
                       console.log("yes they match"); 
                        
                         if(!VerifyAnswer[""+ChoiceIs+""]){
                            
                            VerifyAnswer[""+ChoiceIs+""] = ""+ForScore+"";
                            score += 1;
                            displayscore.innerHTML = "Score: "+score+"";
                             
                        }
                        
                        //sound.play();
                        //audio.src = undefined;
                        
                        NextQuestion();
                    
                    } else {
                      
                        console.log("correct answer is", CorrectAnswer);
                        
                    }  
              });
    
      $scope.$on('RepeatA', function(){
            
                
                           audio.play();
                      
            });
            
}