/* Programmed by: Zeshan Bilal
   Date: June 28 2014
*/

function LessonTwoPageOne($scope,$http){
    
    var score = 0;
    var displayscore = document.getElementById('Score');
    var needed = 35;
    var displayneeded = document.getElementById('Needed');
    displayneeded.innerHTML = "Score Needed: 35";
    var VerifyAnswer = new Array();
    var ForScore;
    var audio = document.getElementById('AudioPlayer');
        
       function AnswerChoices(Question){
            
            choices[0] = Math.floor(0 + (1+12-0)*Math.random());
            choices[1] = Math.floor(13 + (1+17-13)*Math.random());
            choices[2] = Math.floor(18 + (1+34-18)*Math.random());
            
       var whattochoose = Math.floor(0 + (1+2-0)*Math.random());
        
            SelectedQuestion = choices[whattochoose];

        }
    
     function pickQuestion(){
            
        
        }
        
     
      
         function NextQuestion() {
        
                   //pickQuestion();
                     AnswerChoices();
             
                    CorrectAnswer = "../image/"+QuizData["c"+ SelectedQuestion +""].en +"";
                    ForScore = "../image/"+QuizData["c"+ SelectedQuestion +""].img +"";
                   
             $scope.Question = "/sound/aac/"+QuizData["c"+  SelectedQuestion   +""].sound +"";
                    $scope.Questionogg = "/sound/ogg/"+QuizData["c"+  SelectedQuestion   +""].soundogg +"";
                   //$scope.Question = "sound/"+QuizData["c"+ QuestionNum +""].sound +""; 
                      $scope.choiceA = "../image/"+QuizData["c"+ choices[0] +""].img +"";
                      $scope.choiceAen = "../image/"+QuizData["c"+ choices[0] +""].en +"";
                      $scope.choiceB = "../image/"+QuizData["c"+ choices[1] +""].img +"";
                      $scope.choiceBen = "../image/"+QuizData["c"+ choices[1] +""].en +"";
                      $scope.choiceC = "../image/"+QuizData["c"+ choices[2] +""].img +"";
                      $scope.choiceCen = "../image/"+QuizData["c"+ choices[2] +""].en +"";
                  
                   if(audio.canPlayType('audio/mpeg')){
                         
                         audio.src = $scope.Question;
                       } 
                      
                      if(audio.canPlayType('audio/ogg')){
                         
                         audio.src = $scope.Questionogg;
                         }
                      
                       
                          audio.play();
             
         }
        
            $http.get('../json-data/lesson2-page1.json')
                  .success(function(data,status,headers,config){
                              
                      QuizData = data;
                       
                      AnswerChoices();
                      //pickQuestion();
                      
                   CorrectAnswer = "../image/"+QuizData["c"+ SelectedQuestion +""].en +"";
                   ForScore = "../image/"+QuizData["c"+ SelectedQuestion +""].img +"";
                   $scope.Question = "sound/aac/"+QuizData["c"+  SelectedQuestion   +""].sound +"";
                    $scope.Questionogg = "sound/ogg/"+QuizData["c"+  SelectedQuestion   +""].soundogg +"";
                   //$scope.Question = "sound/"+QuizData["c"+ QuestionNum +""].sound +""; 
                      $scope.choiceA = "../image/"+QuizData["c"+ choices[0] +""].img +"";
                      $scope.choiceAen = "../image/"+QuizData["c"+ choices[0] +""].en +"";
                      $scope.choiceB = "../image/"+QuizData["c"+ choices[1] +""].img +"";
                      $scope.choiceBen = "../image/"+QuizData["c"+ choices[1] +""].en +"";
                      $scope.choiceC = "../image/"+QuizData["c"+ choices[2] +""].img +"";
                      $scope.choiceCen = "../image/"+QuizData["c"+ choices[2] +""].en +"";
                      
                     
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
            
                
                           AudioPlayer.play();
                      
            });
            
}