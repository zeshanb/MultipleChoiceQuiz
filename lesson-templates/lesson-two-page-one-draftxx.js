/* Programmed by: Zeshan Bilal
   Date: June 28 2014
*/
function LessonTwo($scope,$http) {
        
        
        function pickQuestion(){
            
              //num = Math.floor(M + (1+N-M)*Math.random())  num is random integer from M to N 
        }
        
        
        function AnswerChoices(Question){
            
            choices[0] = Math.floor(0 + (1+12-0)*Math.random());
            choices[1] = Math.floor(13 + (1+17-13)*Math.random());
            choices[2] = Math.floor(18 + (1+34-18)*Math.random());
            
            pickchoice = Math.floor(0 + (1+2-0)*Math.random());
                
           var whattochoose = Math.floor(0 + (1+2-0)*Math.random());
        
            SelectedQuestion = choices[whattochoose];

        }
        
      
        function NextQuestion() {
        
              AnswerChoices();
                      
                      CorrectAnswer = ""+QuizData["c"+ SelectedQuestion +""].en +"";
                      
                      $scope.Question = "../image/"+QuizData["c"+ SelectedQuestion +""].img +""; 
                      $scope.choiceA = ""+QuizData["c"+ choices[0] +""].en +"";
                      $scope.choiceB = ""+QuizData["c"+ choices[1] +""].en +"";
                      $scope.choiceC = ""+QuizData["c"+ choices[2] +""].en +"";
        
                }
        
            $http.get('../json-data/lesson2-page1.json')
                  .success(function(data,status,headers,config){
                     
                      QuizData = data;
             
                           AnswerChoices();
                      
                      CorrectAnswer = ""+QuizData["c"+ SelectedQuestion +""].en +"";
                      
                      $scope.Question = "../image/"+QuizData["c"+ SelectedQuestion +""].img +""; 
                      $scope.choiceA = ""+QuizData["c"+ choices[0] +""].en +"";
                      $scope.choiceB = ""+QuizData["c"+ choices[1] +""].en +"";
                      $scope.choiceC = ""+QuizData["c"+ choices[2] +""].en +"";
                      
                      console.log('success',status)
                      console.log(QuizData)
                  
                  })
                  .error(function(data,status,headers, config){
                     
                      console.log('error!', status)
                      console.log(QuizData)
                  })
            
            
            $scope.$on('ChoseA', function(){

                console.log($scope.choiceA);
                  
                    if ($scope.choiceA === CorrectAnswer){
                      
                       console.log("yes they match"); 
                        
                        NextQuestion();
                    
                    } else {
                      
                        console.log("correct answer is", CorrectAnswer);
                        
                    }  
              });
        
        
               $scope.$on('ChoseB', function(){

                console.log($scope.choiceB);
                  
                    if ($scope.choiceB === CorrectAnswer){
                      
                       console.log("yes they match"); 
                        
                        NextQuestion();
                    
                    } else {
                      
                        console.log("correct answer is", CorrectAnswer);
                        
                    }  
              });
        
        
               $scope.$on('ChoseC', function(){

                console.log($scope.choiceC);
                  
                    if ($scope.choiceC === CorrectAnswer){
                      
                       console.log("yes they match"); 
                        
                        NextQuestion();
                    
                    } else {
                      
                        console.log("correct answer is", CorrectAnswer);
                        
                    }  
              });
            
        
        
    }