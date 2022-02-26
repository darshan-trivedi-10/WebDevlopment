module.exports = {
    answers: [
        `#include <bits/stdc++.h>
        using namespace std;
        
        int main()
        {
            int n;
            cin>>n;
            
            int arr[n];
            int ans = 0;
            for(int i =0; i<n; i++){
                cin>>arr[i];
                ans += arr[i];
            }
            
            
            
            cout<<ans<<endl;
            return  0;
            
               
        } `

    ]
}