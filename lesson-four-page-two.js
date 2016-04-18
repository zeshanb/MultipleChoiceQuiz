/* Programmed by: Zeshan Bilal
   Date: July 02 2014
*/

function LessonFourPageTwo($scope,$http){
    
  if(QuizData){ QuizData = null;}
    
   var score = 0;
    var displayscore = document.getElementById('ScoreSix');
    var needed = 44;
    var displayneeded = document.getElementById('NeededSix');
    displayneeded.innerHTML = "Score Needed: 44";
    var VerifyAnswer = new Array();
    var VerifyAnswer = new Array();
    var VerifyAnswer = new Array();
    var ForScore;
    var audio = document.getElementById('AudioPlayerSix');
    var whattochoose;
        
       function AnswerChoices(Question){
           
           whattochoose = Math.floor(0 + (1+2-0)*Math.random());
            
            choices[0] = Math.floor(0 + (1+14-0)*Math.random());
            choices[1] = Math.floor(15 + (1+28-15)*Math.random());
            choices[2] = Math.floor(29 + (1+43-29)*Math.random());

        }

          
         function NextQuestion() {
        
                     AnswerChoices();
             
                    CorrectAnswer = "image/Lesson4Pg2/"+QuizData["h"+ choices[whattochoose] +""].en +"";
                    ForScore = "image/Lesson4Pg2/"+QuizData["h"+ choices[whattochoose]  +""].img +"";
                    $scope.Question = "sound/lesson4pg2/aac/"+QuizData["h"+  choices[whattochoose]   +""].sound +"";
                    $scope.Questionogg = "sound/lesson4pg2/ogg/"+QuizData["h"+  choices[whattochoose]   +""].soundogg +"";
                   //$scope.Question = "sound/"+QuizData["c"+ QuestionNum +""].sound +""; 
                      $scope.choiceA = "image/Lesson4Pg2/"+QuizData["h"+ choices[0] +""].img +"";
                      $scope.choiceAen = "image/Lesson4Pg2/"+QuizData["h"+ choices[0] +""].en +"";
                      $scope.choiceB = "image/Lesson4Pg2/"+QuizData["h"+ choices[1] +""].img +"";
                      $scope.choiceBen = "image/Lesson4Pg2/"+QuizData["h"+ choices[1] +""].en +"";
                      $scope.choiceC = "image/Lesson4Pg2/"+QuizData["h"+ choices[2] +""].img +"";
                      $scope.choiceCen = "image/Lesson4Pg2/"+QuizData["h"+ choices[2] +""].en +"";
                  
                   if(audio.canPlayType('audio/mpeg')){
                         
                         audio.src = $scope.Question;
                       } 
                      
                      if(audio.canPlayType('audio/ogg')){
                         
                         audio.src = $scope.Questionogg;
                         }
                      
                       
                          audio.play();
              }
        
            $http.get('lesson4-page2.json')
            
            .success(function(datatwo,status,headers,config){
                              
                      QuizData = datatwo;
                      
                      AnswerChoices();
                      //pickQuestion();
                      
                   CorrectAnswer = "image/Lesson4Pg2/"+QuizData["h"+ choices[whattochoose]  +""].en +"";
                   ForScore = "image/Lesson4Pg2/"+QuizData["h"+ choices[whattochoose]  +""].img +"";
                    $scope.Question = "sound/lesson4pg2/aac/"+QuizData["h"+  choices[whattochoose]   +""].sound +"";
                    $scope.Questionogg = "sound/lesson4pg2/ogg/"+QuizData["h"+  choices[whattochoose]   +""].soundogg +"";
                   //$scope.Question = "sound/"+QuizData["c"+ QuestionNum +""].sound +""; 
                      $scope.choiceA = "image/Lesson4Pg2/"+QuizData["h"+ choices[0] +""].img +"";
                      $scope.choiceAen = "image/Lesson4Pg2/"+QuizData["h"+ choices[0] +""].en +"";
                      $scope.choiceB = "image/Lesson4Pg2/"+QuizData["h"+ choices[1] +""].img +"";
                      $scope.choiceBen = "image/Lesson4Pg2/"+QuizData["h"+ choices[1] +""].en +"";
                      $scope.choiceC = "image/Lesson4Pg2/"+QuizData["h"+ choices[2] +""].img +"";
                      $scope.choiceCen = "image/Lesson4Pg2/"+QuizData["h"+ choices[2] +""].en +"";
                      
                      
                     if(audio.canPlayType('audio/mpeg')){
                         
                         audio.src = $scope.Question;
                       } 
                      
                      if(audio.canPlayType('audio/ogg')){
                         
                         audio.src = $scope.Questionogg;
                         }
                      
                       
                          audio.play();
                      
                      
                      console.log('success',status);
                      console.log(QuizData);
                  
                  })
                  .error(function(data,status,headers, config){
                     
                      console.log('error!', status);
                      console.log(QuizData);
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

                console.log($scope.choiceB);
                   
                   var ChoiceIs = ""+ $scope.choiceB +"";
                   
                   
                    if ($scope.choiceBen === CorrectAnswer){
                      
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
                        audio.src = undefined;
                        
                        NextQuestion();
                    
                    } else {
                      
                        console.log("correct answer is", CorrectAnswer);
                        
                    }  
              });
    
           $scope.$on('RepeatA', function(){
            
                
                           audio.play();
                      
            });
            
}